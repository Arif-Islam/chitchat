const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");

const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.DATABASE_CONNECTION)
  .then(() => {
    app.listen(port, () => {
      console.log(`App is running on port ${port}`.yellow);
    });
    console.log("🚪 Database connection is successful".blue.bold.underline);
  })
  .catch((error) => {
    console.log(`Error ${error}`);
  });
