const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();
require("./Database/database");
var cors = require("cors");
const port = process.env.PORT;
const user_routes = require("./routes/user");

app.use(cors());

app.use(morgan("dev"));
// app.use(bodyParser.json()); prathmesh
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(user_routes);

app.listen(port, () => {
  console.log(`Server started http://localhost:${port}`);
});
