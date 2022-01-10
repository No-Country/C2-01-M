const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  title: {
    type: String,
    required: [true, "The title is required"],
    unique: true,
  },
  price: {
    type: String,
    required: [true, "The price is required"],
  },
  state: {
    type: Boolean,
    default: true,
    required: true,
  },
  name: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  description: {
    type: String,
    required: [true, "The description is required"],
  },
  image: {
    type: String,
    required: true,
  },
});

ProductSchema.methods.toJSON = function () {
  const { __v, state, ...data } = this.toObject();
  return data;
};

module.exports = mongoose.model("Product", ProductSchema);
