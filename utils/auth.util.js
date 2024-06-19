const sessionIdToUser = new Map();

function setSessionId(sessionId, user) {
  sessionIdToUser.set(sessionId, user);
}

function getSessionId(sessionId) {
  return sessionIdToUser.get(sessionId);
}

export {
    setSessionId,
    getSessionId
};