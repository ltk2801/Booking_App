const { createError } = require("./error");
const jwt = require("jsonwebtoken");

// kiểm tra đã đăng nhập chưa
exports.verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "You are not authenticated !"));
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return next(createError(403, "Token is not valid !"));
    }
    req.user = user;
    next();
  });
};

// kiểM tra quyền của user
exports.verifyUser = (req, res, next) => {
  exports.verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized !"));
    }
  });
};

// kiểM tra quyền của admin
exports.verifyAdmin = (req, res, next) => {
  exports.verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized !"));
    }
  });
};
