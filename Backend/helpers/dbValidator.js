const User = require("../models/user.model");
const Product = require("../models/product.model");
const Category = require('../models/category.model');
const Role = require('../models/role.mode');

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
  const categoryExits = await Category.findById(id);
  if (!categoryExits) {
    throw new Error(`This id: ${id} is already in use`);
  }
};

const validRole = async (role = '') => {
	const roleExists = await Role.findOne({ role });
	if (!roleExists) {
		throw new Error(`This role: ${role} does not exist`);
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
  existsCategoryById,
  validRole
};
