const bcrypt = require("bcrypt");
const User = require("../models/user.model");

class AuthService {
  userFiltered = (user) => {
    const { name, email, password, role } = user;
    const newUser = new User({ name, email, password, role });
    return newUser;
  };

  async authRegister(user, password) {
    try {
      const salt = bcrypt.genSaltSync();
      user.password = bcrypt.hashSync(password, salt);

      const newUser = this.userFiltered(user).save();
      return newUser;
    } catch (error) {
      throw Error("Failed to register User...");
    }
  }

  async authLogin(email, password) {
    const user = await User.findOne({ email });

    if (!user) {
      throw Error("User and or password is incorrect");
    }

    if (!user.state) {
      throw Error("User and or password is incorrect");
    }

    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      throw Error("User and or password is incorrect");
    }

    const userLogin = this.userFiltered(email);
    return userLogin;
  }
}

module.exports = AuthService;
