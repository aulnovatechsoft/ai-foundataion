import express, { type Express } from "express";
import cors from "cors";
import pinoHttp from "pino-http";
import path from "path";
import fs from "fs";
import { clerkMiddleware } from "@clerk/express";
import { publishableKeyFromHost } from "@clerk/shared/keys";
import {
  CLERK_PROXY_PATH,
  clerkProxyMiddleware,
  getClerkProxyHost,
} from "./middlewares/clerkProxyMiddleware";
import router from "./routes";
import { logger } from "./lib/logger";
import { scheduleStreakReminders } from "./lib/streakScheduler";
import { razorpayWebhookHandler } from "./routes/webhook";

const app: Express = express();

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);

app.use(CLERK_PROXY_PATH, clerkProxyMiddleware());

app.use(cors({ credentials: true, origin: true }));

// Razorpay webhook needs the raw body for signature verification, so it must
// be registered before the JSON body parser.
app.post(
  "/api/payments/webhook",
  express.raw({ type: "application/json" }),
  razorpayWebhookHandler,
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  clerkMiddleware((req) => ({
    publishableKey: publishableKeyFromHost(
      getClerkProxyHost(req) ?? "",
      process.env.CLERK_PUBLISHABLE_KEY,
    ),
  })),
);

const audioDir = path.join(process.cwd(), "audio");
if (!fs.existsSync(audioDir)) fs.mkdirSync(audioDir, { recursive: true });
app.use("/api/audio", express.static(audioDir));

// Per-day curriculum illustrations (committed static assets). Resolve
// independently of the working directory: prefer a path relative to this
// module (dist/index.mjs lives in artifacts/api-server/dist), then fall back
// to cwd-relative paths for dev and repo-root execution.
const curriculumImagesDir = [
  path.resolve(import.meta.dirname, "../curriculum-images"),
  path.resolve(process.cwd(), "curriculum-images"),
  path.resolve(process.cwd(), "artifacts/api-server/curriculum-images"),
].find((p) => fs.existsSync(p));
if (curriculumImagesDir) {
  // Filenames are stable per day, so allow long-lived client caching.
  app.use(
    "/api/curriculum-images",
    express.static(curriculumImagesDir, { maxAge: "7d" }),
  );
} else {
  logger.warn("Curriculum images directory not found; day images unavailable");
}

app.use("/api", router);

// In production, serve the built web frontend and fall back to index.html for
// client-side routing. In development the web is served by the Vite dev server.
if (process.env.NODE_ENV === "production") {
  // Resolve the built web bundle independently of the working directory:
  // prefer a path relative to this module (dist/index.mjs lives in
  // artifacts/api-server/dist), then fall back to a repo-root-relative path.
  const candidates = [
    path.resolve(import.meta.dirname, "../../web/dist/public"),
    path.resolve(process.cwd(), "artifacts/web/dist/public"),
  ];
  const webDist = candidates.find((p) => fs.existsSync(p));
  if (webDist) {
    app.use(express.static(webDist));
    app.get(/^(?!\/api).*/, (_req, res) => {
      res.sendFile(path.join(webDist, "index.html"));
    });
  } else {
    logger.warn({ candidates }, "Web build not found; serving API only");
  }
} else if (process.env.REPLIT_DEV_DOMAIN) {
  // In development the web app is served by the Vite dev server on the primary
  // port, while this API server runs on 8080. If a browser navigates directly
  // to the API server with a client-side route (e.g. /quiz), bounce it to the
  // web app origin so those routes resolve instead of returning "Cannot GET".
  app.get(/^(?!\/api).*/, (req, res) => {
    res.redirect(302, `https://${process.env.REPLIT_DEV_DOMAIN}${req.originalUrl}`);
  });
}

scheduleStreakReminders();

export default app;
