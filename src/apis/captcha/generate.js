import svgCaptcha from 'svg-captcha';
import create_api_response from '../../common_services/api_response/create_api_response.js';

const generate = async (req,res) => {

    try{
        const captchaImage = svgCaptcha.create({
            size:6,
            noise:2,
            background:'#cc9966'
        });
    
        console.log(captchaImage);
        req.session.name = "test";
        req.session.captcha = captchaImage.text;

        console.log(req.session);

        return res.status(200).json(create_api_response(true,"captcha generated",{svgData:captchaImage.data}));
    }catch(err){
        console.log(err);
        return res.status(500).json(create_api_response(false));
    }
   
}

export default generate;