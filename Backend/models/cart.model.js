const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Product = require("./product.model");
const User = require("./user.model");

const CartSchema = new Schema({
  User: {
    type: Schema.Types.ObjectId,
    ref: User,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  products: [
    {
      productId: {
        type: Schema.Types.Number,
        ref: Product,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("cart", CartSchema);
