import { Router } from "express";
import generate from "./generate.js";
import generateCookie from "./generate-cookie.js";


const captchaRouter = Router();

captchaRouter.get("/", generate);
captchaRouter.get("/captcha-cookie", generateCookie);

export default captchaRouter;