const express = require("express");
const cors = require("cors");
const pool = require("./connect-database");
const app = express();

const port = process.env.SERVER_PORT || 4000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res, next) => {
  console.log("Hello World!");
  res.status(200).send("Hello World!");
});

app.listen(port, () => console.log('Server running on port '+ port));