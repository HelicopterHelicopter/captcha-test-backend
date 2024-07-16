import create_api_response from "../../../common_services/api_response/create_api_response.js";

const loginAWS = async (req,res) => {
    try{

        const {username, password} = req.body;
        console.log(username,password);

        //db transaction
        //otp generation
        
        return res.status(200).json(create_api_response(true));

    }catch(err){
        return res.status(400).json(create_api_response(false,err.message));
    }
}

export default loginAWS;