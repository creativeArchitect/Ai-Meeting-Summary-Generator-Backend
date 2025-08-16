import { Router } from "express";
import { postEmail } from "../controller/email.controller";

const emailRouter = Router();

emailRouter.post('/send', postEmail);

export default emailRouter;