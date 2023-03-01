const express = require("express");
const v1 = require("./router/router");
const app = express();
const cors = require("cors");

const port = 4000;

app.use(express.json());

app.use("/v1", v1);
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(cors());

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
