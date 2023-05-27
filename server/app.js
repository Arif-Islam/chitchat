const express = require("express");
const cors = require("cors");
const chats = require("./data/data");

const app = express();


app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Route is working properly!");
})

app.get("/api/chats", (req, res) => {
    res.send(chats);
})

module.exports = app;