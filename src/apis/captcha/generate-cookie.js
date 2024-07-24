import svgCaptcha from 'svg-captcha';
import create_api_response from '../../common_services/api_response/create_api_response.js';
import { COOKIE_NAME } from '../../utils/constants.js';
import SessionManager from '../../common_services/CaptchaSessionManager/sessionManager.js';

const generateCookie = async (req, res) => {

    try {
        const sessionId = req.signedCookies[`${COOKIE_NAME}`];

        const sessionManager = SessionManager.getInstance();

        if (sessionId) {
            sessionManager.deleteSession(sessionId);
            res.clearCookie(COOKIE_NAME, {
                httpOnly: true,
                signed: true,
                path: "/",
                secure: true,
                sameSite: 'none'
            });
        }

        const captchaImage = svgCaptcha.create({
            size: 6,
            noise: 2,
            background: '#cc9966'
        });
        const session = sessionManager.createSession(captchaImage.text);
        res.cookie(COOKIE_NAME, session.sessionId, {
            path: "/",
            httpOnly: true,
            signed: true,
            secure: true,
            sameSite: 'none'
        });

        return res.status(200).json(create_api_response(true, "captcha generated", { svgData: captchaImage.data }));
    } catch (err) {
        console.log(err);
        return res.status(500).json(create_api_response(false));
    }

}

export default generateCookie;