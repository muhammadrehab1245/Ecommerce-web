const jwt = require('jsonwebtoken');
const SECRET_KEY = 'newuser'; // Same key jo tumne JWT generate karte waqt use ki thi

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log(authHeader)
    const token = authHeader && authHeader.split(' ')[1];
    console.log(token)
    
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized: Token missing' });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    console.log(decoded)
    req.user = decoded.user; // decoded user info ko req me attach kar rahe hain
    next(); // Authorized, proceed to next handler
  } catch (err) {
    return res.status(403).json({ message: 'Forbidden: Invalid token' });
  }
};

module.exports = authMiddleware;
