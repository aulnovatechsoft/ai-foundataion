import { Router, type IRouter } from "express";
import healthRouter from "./health";
import { meRouter } from "./me";
import { onboardingRouter } from "./onboarding";
import { paymentsRouter } from "./payments";
import { curriculumRouter } from "./curriculum";
import { coursesRouter } from "./courses";
import { progressRouter } from "./progress";
import { achievementsRouter } from "./achievements";
import { leaderboardRouter } from "./leaderboard";
import { profilesRouter } from "./profiles";
import { feedRouter } from "./feed";
import { certificatesRouter } from "./certificates";
import { projectsRouter } from "./projects";
import { promptsRouter } from "./prompts";
import { openaiRouter } from "./openai";
import { aiRouter } from "./ai";

const router: IRouter = Router();

router.use(healthRouter);
router.use(meRouter);
router.use(onboardingRouter);
router.use(paymentsRouter);
router.use(curriculumRouter);
router.use(coursesRouter);
router.use(progressRouter);
router.use(achievementsRouter);
router.use(leaderboardRouter);
router.use(profilesRouter);
router.use(feedRouter);
router.use(certificatesRouter);
router.use(projectsRouter);
router.use(promptsRouter);
router.use(openaiRouter);
router.use(aiRouter);

export default router;
