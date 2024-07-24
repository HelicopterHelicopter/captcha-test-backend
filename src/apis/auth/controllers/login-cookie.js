import create_api_response from "../../../common_services/api_response/create_api_response.js";

const loginCookie = async (req, res) => {
    try {

        const { username, password, captcha } = req.body;
        console.log(username, password, captcha);

        if (captcha !== req.session.captcha) {
            return res.status(401).json(create_api_response(false, "Invalid captcha"));
        }

        req.session.captcha = null;

        return res.status(200).json(create_api_response(true));

    } catch (err) {
        return res.status(400).json(create_api_response(false, err.message));
    }
}

export default loginCookie;