import express, { Express, Request, Response } from "express";
import cors from "cors";
import uploadRouter from "./routes/upload";
import authRouter from "./routes/auth";

export const createApp = (): Express => {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Healthcheck endpoint
  app.get("/api/health", (_req: Request, res: Response) => {
    res.json({
      status: "ok",
      service: "slipstream-api",
      timestamp: new Date().toISOString(),
    });
  });

  // Routes
  app.use("/api/upload", uploadRouter);
  app.use("/api/auth", authRouter);

  return app;
};

