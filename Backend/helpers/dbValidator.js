const User = require("../models/user.model");
const Product = require("../models/product.model");

const validEmail = async (email = "") => {
  const emailExists = await User.findOne({ email });
  if (emailExists) {
    throw new Error(`This email: ${email} is already in use`);
  }
};

const validUserByID = async (id) => {
  const userExists = await User.findById(id);
  if (!userExists) {
    throw new Error(`This id: ${id} is already in use`);
  }
};

const existsCategoryById = async (id) => {
  const categoryExits = await User.findById(id);
  if (!categoryExits) {
    throw new Error(`This id: ${id} is already in use`);
  }
};

const existProductById = async (id) => {
  const productExists = await Product.findById(id);
  if (!productExists) {
    throw new Error(`Id does not exist ${id}`);
  }
};

module.exports = {
  validEmail,
  validUserByID,
  existProductById,
  existsCategoryById
};
