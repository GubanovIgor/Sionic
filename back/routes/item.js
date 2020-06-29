const express = require("express");
const router = express.Router();

const {
  getItem,
} = require("../controllers/item");

router.get("/", getItem);

module.exports = router;