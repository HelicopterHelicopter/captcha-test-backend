import { Router } from "express";
import login from "./controllers/login.js";
import loginCustom from "./controllers/login-custom.js";
import loginAWS from "./controllers/login-aws.js";
import loginCookie from "./controllers/login-cookie.js";
import loginGoogleV3 from "./controllers/login-googlev3.js";

const authRouter = Router();

authRouter.post("/login", login);
authRouter.post("/login-custom", loginCustom);
authRouter.post("/login-cookie", loginCookie);
authRouter.post('/login-aws', loginAWS);
authRouter.post('/login-challenge', loginAWS);
authRouter.post('/login-verify', loginGoogleV3);

export default authRouter;