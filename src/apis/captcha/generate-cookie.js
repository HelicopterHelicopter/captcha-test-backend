import svgCaptcha from 'svg-captcha';
import create_api_response from '../../common_services/api_response/create_api_response.js';
import { COOKIE_NAME } from '../../utils/constants.js';

const generateCookie = async (req, res) => {

    try {
        const sessionId = req.signedCookies[`${COOKIE_NAME}`];

        const sessionManager = SessionManager.getInstance(10000);

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

        res.cookie(COOKIE_NAME, sessionManager.createSession(captchaImage.text), {
            path: "/",
            expires,
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