import { getUser } from "../utils/auth.util.js";

function checkForAuthentication(req, res, next) {
    // const authorizationHeaderValue = req.headers['authorization'];
    const token = req.cookies?.uid;
    req.user = null;

    if (!token) {
        return next();
    }
    // const token = authorizationHeaderValue.split('Bearer ')[1];
    const user = getUser(token);
   
    req.user = user;
    return next();
}

function restrictTo(roles) {
    return function (req, res, next) {
        if (!req.user) {
            return res.redirect('/login');
        }
        if(!roles.includes(req.user.role)) {
            return res.end('You are not authorized to perform this action');
        }
        return next();
    }
}

export {
    checkForAuthentication,
    restrictTo
}