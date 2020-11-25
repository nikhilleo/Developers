
const express = require('express');
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();
require("./Database/database");
const port = process.env.PORT;
const user_routes = require("./routes/user")

app.use(morgan("dev"));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send("Hello World");
});

app.use(user_routes);

app.listen(port, () => {
    console.log(`Server started http://localhost:${port}`);
});