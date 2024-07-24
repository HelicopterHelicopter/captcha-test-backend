import create_api_response from "../../../common_services/api_response/create_api_response.js";
import SessionManager from "../../../common_services/CaptchaSessionManager/sessionManager.js";
import { COOKIE_NAME } from "../../../utils/constants.js";

const loginCookie = async (req, res) => {
    try {

        const { username, password, captcha } = req.body;
        console.log(username, password, captcha);

        const sessionId = req.signedCookies[`${COOKIE_NAME}`];
        if (!sessionId || sessionId.trim() === "") {
            return res.status(401).json(create_api_response(false, "SessionId not received"));
        }

        const sessionManager = SessionManager.getInstance();

        if (!sessionManager.verifyCaptcha(sessionId, captcha)) {
            return res.status(401).json(create_api_response(false, "Invalid captcha"));
        }

        return res.status(200).json(create_api_response(true));

    } catch (err) {
        return res.status(400).json(create_api_response(false, err.message));
    }
}

export default loginCookie;