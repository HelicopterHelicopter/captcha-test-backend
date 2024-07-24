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

    addNewSession(captchaText) {
        const sessionId = crypto.randomUUID();
        this.sessionStorage.set(sessionId, { captchaText, expiryTime: Date.now() + this.sessionExpiryTime });
        return sessionId;
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