class SessionManager {

    static instance = null;

    constructor(sessionExpiryTime) {
        if (SessionManager.instance) {
            throw new Error("Class is singleton");
        }

        this.sessionStorage = new Map();
        this.sessionExpiryTime = sessionExpiryTime;
    }

    static getInstance(sessionExpiryTime) {
        if (!SessionManager.instance) {
            SessionManager.instance = new SessionManager(sessionExpiryTime);
        }

        return SessionManager.instance;
    }

    createSession(captchaText) {
        const sessionId = crypto.randomUUID();
        const sessionData = { captchaText, expiryTime: Date.now() + this.sessionExpiryTime }
        this.sessionStorage.set(sessionId, sessionData);
        return { sessionId, sessionData };
    }

    verifyCaptcha(sessionId, captchaText) {
        if (!this.sessionStorage.has(sessionId)) {
            return false;
        } else {
            const sessionData = this.sessionStorage.get(sessionId);
            if (sessionData.captchaText === captchaText && sessionData.expiryTime > Date.now()) {
                return true;
            } else {
                this.deleteSession(sessionId);
                return false;
            }
        }
    }

    deleteSession(sessionId) {
        this.sessionStorage.delete(sessionId);
    }
}

export default SessionManager;