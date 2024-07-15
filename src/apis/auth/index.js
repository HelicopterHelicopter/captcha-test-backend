import { Router } from "express";
import login from "./controllers/login.js";
import loginCustom from "./controllers/login-custom.js";
import loginAWS from "./controllers/login-aws.js";

const authRouter = Router();

authRouter.post("/login",login);
authRouter.post("/login-custom",loginCustom);
authRouter.post('/login-aws',loginAWS);

export default authRouter;