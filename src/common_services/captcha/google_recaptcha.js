import axios from "axios";

const validateRecaptchaToken = async (token) => {

    try {
        const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`;

        const response = await axios.post(verificationUrl);
        console.log(response);
        const data = await response.data;
        console.log(data);
        return data.success;
    } catch (err) {
        return false;
    }
}

export default validateRecaptchaToken;