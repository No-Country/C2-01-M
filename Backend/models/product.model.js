const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ProductSchema = new schema({
  title: {
    type: String,
    required: [true, "The title is required"],
  },
  price: {
    type: String,
    required: [true, "The price is required"],
  },
  description: String,
  image: {
    type: String,
    required: [true, "The image of this product is required"],
  },
  // category: {
  //   type: String,
  //   required: false,
  // },
  state: {
    type: Boolean,
    default: true,
    required: true,
  },
});

module.exports = mongoose.model("product", ProductSchema);
