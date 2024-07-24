import { Router } from "express";
import login from "./controllers/login.js";
import loginCustom from "./controllers/login-custom.js";
import loginAWS from "./controllers/login-aws.js";
import loginCookie from "./controllers/login-cookie.js";

const authRouter = Router();

authRouter.post("/login", login);
authRouter.post("/login-custom", loginCustom);
authRouter.post("/login-cookie", loginCookie);
authRouter.post('/login-aws', loginAWS);
authRouter.post('/login-challenge', loginAWS);
authRouter.get('/login-aws', (req, res) => {
    return res.status(200).json({ message: "testing" });
});

export default authRouter;