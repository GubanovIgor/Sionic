const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = Schema(
  {
    category: { type: Schema.Types.ObjectId, ref: "Category" },
    name: String,
    price: Number,
    property: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Item", itemSchema);
