import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";

import type { Request, Response, NextFunction } from "express";

import summaryRouter from "./routes/summary.routes";
import emailRouter from "./routes/email.routes";

dotenv.config();

const app = express();
const port = process.env.PORT || 5050;

app.use(morgan("dev"));
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

app.use("/api/file", summaryRouter);
app.use("/api/file/summary", emailRouter);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
