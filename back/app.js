const cors = require("cors");
const express = require("express");
const path = require("path");

// Routes import
const index = require("./routes/index");

const APP = express();

// Добавляем CORS
// APP.use(cors());
// или с опциями
// Access-Control-Allow-Origin *
APP.use(
  cors({
    credentials: true,
    origin: true,
    allowedHeaders: "Content-Type, Authorization, X-Requested-With",
    methods: "GET,HEAD,POST,PATCH,DELETE,OPTIONS",
  })
);
APP.options("*", cors());
// или для каждого поинта отдельно
// app.options('/api/v1/some', cors());

// Путь до директория со статическими файлами
APP.use(express.static(path.join(__dirname, "public")));

// Переданные данные в формате json
// с заголовком Content-Type: application / x-www-form-urlencoded
// будут распаршены
// до версии Express 4.16 использовали body-parser
APP.use(express.urlencoded({ extended: true, limit: "50kb" }));

APP.use("/", index);

module.exports = APP;
