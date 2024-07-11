import { Router } from "express";
import generate from "./generate.js";


const captchaRouter = Router();

captchaRouter.get("/",generate);

export default captchaRouter;