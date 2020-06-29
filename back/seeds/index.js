const mongoose = require("mongoose");

const Category = require("../models/category");
const Item = require("../models/item");
const db = "mongodb://localhost/sionic";

mongoose.connect(db, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const categoryNames = [
  "Телевизоры",
  "Холодильники",
  "Квадрокоптеры",
  "Соковыжималки",
];
const itemNames = ["Телевизор", "Холодильник", "Квадрокоптер", "Соковыжималка"];

// Upload category and items to db
const seeder = async () => {
  for (const category of categoryNames) {
    const newCategory = await new Category({ name: category });
    await newCategory.save();
  }

  const categories = await Category.find();

  for (let n = 0; n < 4; n++) {
    for (let i = 1; i < 11; i++) {
      const newItem = await new Item({
        category: categories[n]._id,
        name: `${itemNames[n]} ${i}`,
        price: Math.floor(Math.random() * 5997) + 500,
        property: "some properties",
      });
      await newItem.save();
    }
  }

  mongoose.connection.close();
};

seeder();
