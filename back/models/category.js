const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = Schema(
  {
    name: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
