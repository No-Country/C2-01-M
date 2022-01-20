const bcrypt = require("bcrypt");

const User = require("../models/user.model");
const generateJWT = require("../middelwares/generateJWT");
const AuthService = require("../services/auth.service");

class authController {
  async register(req, res) {
    try {
      const { name, email, password, role } = req.body;
      const user = new User({ name, email, password, role });

      const userData = await new AuthService().authRegister(user, password);

      return res.status(200).json({
        message: "Registered user successfully",
        userData,
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async login(req = Request, res = Response) {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });

      await new AuthService().authLogin(email, password);
      const token = await generateJWT(user.id);

      res.json({
        message: "Logged in successfully",
        user,
        token,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Contact the administrator",
      });
    }
  }
}

module.exports = new authController();
