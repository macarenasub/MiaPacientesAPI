const express = require("express");
const api = require("./api/index");
const db = require("./utils/db");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", api);

app.listen(port, () => {
  console.log(`App running in port: ${port}`);
});