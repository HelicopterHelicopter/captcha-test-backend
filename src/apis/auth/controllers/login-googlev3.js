import create_api_response from "../../../common_services/api_response/create_api_response.js";
import validateRecaptchaToken from "../../../common_services/captcha/google_recaptcha.js";


const loginGoogleV3 = async (req, res) => {
    try {

        const { username, password, captchaToken } = req.body;
        console.log(username, password, captchaToken);

        if (!await validateRecaptchaToken(captchaToken)) {
            return res.status(401).json(create_api_response(false, "Invalid captcha token"));
        }

        //db transaction
        //otp generation

        return res.status(200).json(create_api_response(true));

    } catch (err) {
        return res.status(400).json(create_api_response(false, err.message));
    }
}

export default loginGoogleV3;