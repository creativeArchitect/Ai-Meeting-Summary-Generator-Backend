import type { Request, Response, NextFunction } from "express";
import AppError from "../utils/error.utils";
import generateSummary from "../services/ai.service";
import mammoth from "mammoth";

export const uploadFile = async (  
  req: Request,
  res: Response,
  next: NextFunction
)=> {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    let text = "";
    
    if (req.file.mimetype === "text/plain") {
      text = req.file.buffer.toString("utf-8");
    } else if (req.file.originalname.endsWith(".docx")) {
      const result = await mammoth.extractRawText({ buffer: req.file.buffer });
      text = result.value;
    }

    res.status(200).json({ 
      success: true,
      message: "file uploaded successfully..",
      transcript: text 
    });
  } catch (err) {
    res.status(500).json({ error: "File processing failed" });
  } };

export const getSummary = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { transcript, customPrompt} = req.body;

    if (!transcript) {
      return next(new AppError("Failed to extract text from file", 500));
    }

    const summary = await generateSummary(transcript, customPrompt);

    if (!summary) {
      return next(
        new AppError("error in generating summary, please try again later", 500)
      );
    }

    res.status(200).json({
      success: true,
      message: "summary generated successfully..",
      summary,
    });
  } catch (err) {
    console.log("error in getSummary controller");
    return next(new AppError("ERROR: " + err, 500));
  }
};
