const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/user", userRoutes);

app.use(notFound);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Route is working properly!");
});

module.exports = app;
