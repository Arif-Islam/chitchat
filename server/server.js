const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require("dotenv").config();
const colors = require("colors");

mongoose.connect(process.env.DATABASE_CONNECTION).then(() => {
    console.log('Database connection is successful'.blue.bold);
})

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`App is running on port ${port}`.yellow);
})