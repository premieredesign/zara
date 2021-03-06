"use strict";
const express = require("express");
const app = express();
const routes = require("./routes");
const port = 3000;

app.use(express.static(__dirname + "/public"));
app.use(express.json());
// Handle incoming request
app.get("*", routes);

app.listen(port, () => {
  console.log(`Server is running: ${port}`);
});
