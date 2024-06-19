import jwt from 'jsonwebtoken';
const secret = process.env.JWT_SECRET;

function setSessionId(user) {
  return jwt.sign({
    _id: user._id,
    email: user.email
  }, secret);
}

function getSessionId(token) {
  try {
    return jwt.verify(token, secret);
  }
  catch (error) {
    return null;
  }
}

export {
  setSessionId,
  getSessionId
};