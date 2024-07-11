import { Router } from "express";
import authRouter from "./auth/index.js";
import captchaRouter from "./captcha/index.js";

const apiRouter = Router();

apiRouter.use("/auth",authRouter);
apiRouter.use("/captcha",captchaRouter);

export default apiRouter;