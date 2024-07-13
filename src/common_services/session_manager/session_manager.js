

class SessionManager{

    constructor(){
        this.store = new Map();
    }

    generateSession(cookie){
        const sessionId = crypto.randomUUID();
        this.store.set(sessionId,{cookie});
    }

    generateSession(data){
        const sessionId = crypto.randomUUID();
        this.store.set(sessionId,{cookie,data});
    }

    getSessionData(sessionId){
        if(this.store.has(sessionId)){
            return this.store.get(sessionId).data;
        }else{
            throw new Error("Invalid sessionId");
        }
    }

    destroySession(sessionId){
        if(this.store.has(sessionId)){
            return this.store.delete(sessionId);
        }else{
            throw new Error("Invalid sessionId");
        }
    }
}