const create_api_response = (status=false,message,data) => {
    const response = {status};

    if(!message){
        if(status){
            response.message = "successfull"
        }else{
            response.message = "failed"
        }
    }else{
        response.message = message;
    }
    if(data){
        response.data = data;
    }else{
        response.data = null;
    }

    return response;
}

export default create_api_response;