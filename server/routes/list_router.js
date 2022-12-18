// cannot use app again, need to use router
const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get("/", (req, res) => {
  res.send(toDos);
});

router.post("/", (req, res) => {
  toDos.push(req.body);
  res.sendStatus(200);
});

module.exports = router;
