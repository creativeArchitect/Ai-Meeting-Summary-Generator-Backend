import { Router } from "express";
import { getSummary, uploadFile } from "../controller/summary.controller";
import upload from "../middlewares/fileUpload.middleware";

const summaryRouter = Router();

summaryRouter.post('/upload', upload.single("file"), uploadFile)
summaryRouter.post('/summary', getSummary)


export default summaryRouter;