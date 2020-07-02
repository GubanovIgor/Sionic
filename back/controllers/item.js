const Item = require("../models/item");

exports.getItem = async (req, res, next) => {
  const { categoryId, itemCount } = req.query;

  const items = await Item.find({
    category: { $in: categoryId },
  }).limit(10 + parseInt(itemCount));

  res.json(items);
};
