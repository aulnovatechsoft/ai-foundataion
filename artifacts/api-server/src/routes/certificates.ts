import { randomUUID } from "node:crypto";
import { Router } from "express";
import { asc, eq } from "drizzle-orm";
import { db, certificates } from "@workspace/db";
import {
  ListCertificatesResponse,
  IssueCertificateBody,
  IssueCertificateResponse,
} from "@workspace/api-zod";
import { requireAuth } from "../middlewares/requireAuth";

export const certificatesRouter = Router();

certificatesRouter.get("/certificates", requireAuth, async (req, res) => {
  const rows = await db
    .select()
    .from(certificates)
    .where(eq(certificates.userId, req.userId!))
    .orderBy(asc(certificates.issuedAt));
  res.json(ListCertificatesResponse.parse(rows));
});

certificatesRouter.post("/certificates", requireAuth, async (req, res) => {
  const body = IssueCertificateBody.safeParse(req.body);
  if (!body.success) {
    res.status(400).json({ error: "Invalid certificate" });
    return;
  }
  const [cert] = await db
    .insert(certificates)
    .values({
      userId: req.userId!,
      title: body.data.title,
      description: body.data.description ?? null,
      credentialId: `UPSKIL-${randomUUID().slice(0, 8).toUpperCase()}`,
    })
    .returning();
  res.status(201).json(IssueCertificateResponse.parse(cert));
});
