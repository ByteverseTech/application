const mongoose = require("mongoose");

mongoose
  .connect(process.env.CONNECTING_STRING)
  .then(() => {
    console.log("Database connection is ready....!");
  })
  .catch((err) => {
    console.log(err);
  });
