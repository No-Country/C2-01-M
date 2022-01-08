const Cart = require("../models/cart.model");

class cartController {
  async getAllCarts(req, res) {}

  async getCartsByUserID(req, res) {}

  async getSingleCart(req, res) {}

  async addCart(req, res) {}

  async editCart(req, res) {}

  async deleteCart(req, res) {}
}

module.exports = new cartController();
