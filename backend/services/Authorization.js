const { JWT_SECRET } = require('../config/envConfig');
const jwt = require('jsonwebtoken');

class Authorization {
  authorized(req, res, next) {
    const headerToken = req.headers.authorization;
    if (headerToken) {
      const token = headerToken.split('Bearer ')[1];
      const verified = jwt.verify(token, JWT_SECRET);
      if (verified) {
        next();
      } else {
        return res
          .status(401)
          .json({ errors: [{ msg: 'Please add valid token' }] });
      }
    } else {
      return res.status(401).json({ errors: { msg: 'Please add token' } });
    }
  }
}

module.exports = new Authorization();
