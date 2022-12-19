// cannot use app again, need to use router
const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get("/", (req, res) => {
  console.log("In router!");
  // res.send("OK");
  let queryText = 'SELECT * from "tasks_list";';
  pool
    .query(queryText)
    .then((result) => {
      console.log("results from db", result);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("error making query", error);
      res.sendStatus(500);
    });
});

router.post("/", (req, res) => {
  console.log("in .post");
  const newListItem = req.body;
  const queryText = "";
  pool
    .query(queryText)
    .then((result) => {
      console.log("result", result);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log("error making insert query", error);
      res.sendStatus(500);
    });
});

module.exports = router;
