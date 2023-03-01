require("dotenv").config();
const mongoose = require("mongoose");
const url = process.env.DATABASE;
const express = require("express");
const v1 = require("./router/router");
const app = express();
const cors = require("cors");

const port = 4000;

mongoose
  .connect(url, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("The Database connected successfully.");
  });
app.use(express.json());

app.use("/v1", v1);
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(cors());

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
