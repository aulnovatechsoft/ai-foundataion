import { Router } from "express";
import { and, desc, eq } from "drizzle-orm";
import { db, projects } from "@workspace/db";
import {
  ListProjectsResponse,
  CreateProjectBody,
  CreateProjectResponse,
  UpdateProjectParams,
  UpdateProjectBody,
  UpdateProjectResponse,
  DeleteProjectParams,
} from "@workspace/api-zod";
import { requireAuth } from "../middlewares/requireAuth";

export const projectsRouter = Router();

projectsRouter.get("/projects", requireAuth, async (req, res) => {
  const rows = await db
    .select()
    .from(projects)
    .where(eq(projects.userId, req.userId!))
    .orderBy(desc(projects.updatedAt));
  res.json(ListProjectsResponse.parse(rows));
});

projectsRouter.post("/projects", requireAuth, async (req, res) => {
  const body = CreateProjectBody.safeParse(req.body);
  if (!body.success) {
    res.status(400).json({ error: "Invalid project" });
    return;
  }
  const [project] = await db
    .insert(projects)
    .values({
      userId: req.userId!,
      title: body.data.title,
      description: body.data.description ?? null,
      status: body.data.status ?? "in_progress",
      progress: body.data.progress ?? 0,
    })
    .returning();
  res.status(201).json(CreateProjectResponse.parse(project));
});

projectsRouter.patch("/projects/:id", requireAuth, async (req, res) => {
  const params = UpdateProjectParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: "Invalid project id" });
    return;
  }
  const body = UpdateProjectBody.safeParse(req.body);
  if (!body.success) {
    res.status(400).json({ error: "Invalid project" });
    return;
  }
  const [project] = await db
    .update(projects)
    .set(body.data)
    .where(
      and(eq(projects.id, params.data.id), eq(projects.userId, req.userId!)),
    )
    .returning();
  if (!project) {
    res.status(404).json({ error: "Project not found" });
    return;
  }
  res.json(UpdateProjectResponse.parse(project));
});

projectsRouter.delete("/projects/:id", requireAuth, async (req, res) => {
  const params = DeleteProjectParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: "Invalid project id" });
    return;
  }
  const deleted = await db
    .delete(projects)
    .where(
      and(eq(projects.id, params.data.id), eq(projects.userId, req.userId!)),
    )
    .returning({ id: projects.id });
  if (deleted.length === 0) {
    res.status(404).json({ error: "Project not found" });
    return;
  }
  res.status(204).send();
});
