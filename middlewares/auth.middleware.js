import { getSessionId } from "../utils/auth.util.js";

async function restrictToAuthUser(req, res, next) {
    const sessionId = req.cookies?.sessionId;
    if (!sessionId) {
        return res.redirect('/login');
    }
    const user = getSessionId(sessionId);
    if (!user) {
        return res.redirect('/login');
    }
    req.user = user;
    next();
}

async function checkAuthUser(req, res, next) {
    const sessionId = req.cookies?.sessionId;
    const user = getSessionId(sessionId);
    
    req.user = user;
    next();
}

export {
    restrictToAuthUser,
    checkAuthUser
}