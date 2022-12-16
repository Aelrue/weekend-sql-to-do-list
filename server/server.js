const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5002;

app.listen(PORT, () => {
  console.log("listening on port ", PORT);
});

app.use(express.static("server/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
