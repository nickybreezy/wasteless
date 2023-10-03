const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello, world!");
});

app.listen(3030, () => {
    console.log("Server listening on port 3030");
});