const Item = require("../models/item");

exports.getItem = async (req, res, next) => {
  const { categoryId, itemCount, filterType } = req.query;

  const match = { category: { $in: categoryId } };
  const sort = { [filterType]: 1 };

  const items = await Item.find(match)
    .sort(sort)
    .limit(10 + parseInt(itemCount));

  res.json(items);
};
