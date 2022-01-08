const isAdmin = (req, res, next) => {
  if (!req.user) {
    return res.status(500).json({
      message: "To validate the role, first validate the token",
    });
  }

  const { role, name } = req.user;

  if (role !== "ADMIN_ROLE") {
    return res.status(401).json({
      message: `${name} is not ADMIN`,
    });
  }

  next();
};

const haveRole = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(500).json({
        message: "To validate the role, first validate the token",
      });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(401).json({
        message: `The service requires one of these roles: ${roles}`,
      });
    }

    next();
  };
};

module.exports = {
    isAdmin,
    haveRole
}