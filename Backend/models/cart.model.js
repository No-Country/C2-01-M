const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Product = require("./product.model");
const User = require("./user.model");

const CartSchema = new schema({
  User: {
    type: schema.Types.ObjectId,
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
        type: schema.Types.Number,
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
