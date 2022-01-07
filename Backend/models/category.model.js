const mongoose = require("mongoose");
const schema = mongoose.Schema;

const CategorySchema = new schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
  },
});

module.exports = mongoose.model("category", CategorySchema);
