const Category = require("../models/category");

exports.getCategory = async (req, res, next) => {
  const categories = await Category.find();

  res.json(categories);
};
