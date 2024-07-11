import { Router } from "express";
import login from "./controllers/login.js";
import loginCustom from "./controllers/login-custom.js";

const authRouter = Router();

authRouter.post("/login",login);
authRouter.post("/login-custom",loginCustom);

export default authRouter;