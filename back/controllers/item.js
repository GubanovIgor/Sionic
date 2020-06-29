const Item = require("../models/item");

exports.getItem = async (req, res, next) => {
  const categoryId = req.query.categoryId;

  const items = await Item.find({
    category: { $in: categoryId },
  });

  res.json(items);
};
