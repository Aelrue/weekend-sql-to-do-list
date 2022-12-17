const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("server/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// router to respond to requests from URL
const listRouter = require("./routes/list.router");

app.use("/", listRouter);

const PORT = 5002;
app.listen(PORT, () => {
  console.log("listening on port ", PORT);
});
