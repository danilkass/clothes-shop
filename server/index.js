require("dotenv").config();
const sequelize = require("./db");

const express = require("express");

const PORT = process.env.PORT || 5000;

const app = express();

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(`server error`);
    console.log(e);
  }
};

start();
