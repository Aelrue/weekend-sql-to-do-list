// cannot use app again, need to use router
const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get("/", (req, res) => {
  console.log("In router!");
  res.send("OK");
});

router.post("/", (req, res) => {
  console.log("in .post");
  toDos.push(req.body);
  res.sendStatus(200);
});

module.exports = router;
