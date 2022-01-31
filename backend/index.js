const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
//databse connection import
require("./src/database/db");

//middleware
app.use(cors());
app.options("*", cors());
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`sever started on port ${process.env.PORT}`);
});
