import type { Request, Response, NextFunction } from "express";
import AppError from "../utils/error.utils";
import sendEmail from "../services/email.service";

export const postEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { recipient, subject, summary } = req.body;
    if (!recipient || !summary) {
      return next(new AppError("required fields are empty...", 400));
    }

    const sendResponse = await sendEmail(recipient, subject, summary);

    console.log("send response email", sendResponse);

    res.status(200).json({
      success: true,
      message: "email sent successfully.",
    });
  } catch (err) {
    console.log("error in the post email controller");
    return next(new AppError("ERROR: " + err, 500));
  }
};
