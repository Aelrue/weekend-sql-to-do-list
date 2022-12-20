// cannot use app again, need to use router
const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get("/", (req, res) => {
  console.log("In router!");
  // res.send("OK");
  let queryText = 'SELECT * from "tasks_list" ORDER BY "isDone", "id" DESC; ';

  pool
    .query(queryText)
    .then((result) => {
      console.log("results from db", result.rows);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("error making query", error);
      res.sendStatus(500);
    });
});

/*** Inserts new task into database ***/
router.post("/", (req, res) => {
  // console.log("in .post");
  const newListItem = req.body;
  // console.log("in newListItem", newListItem);
  const queryText = `INSERT INTO "tasks_list"(tasks)
  VALUES ($1);`;

  pool
    .query(queryText, [newListItem.task])
    .then((result) => {
      // console.log("result", result);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log("error making insert query", error);
      res.sendStatus(500);
    });
});

router.delete("/:id", (req, res) => {
  console.log("hello from delete request");
  const queryText = `DELETE from "tasks_list" WHERE id = ${req.params.id};`;
  pool
    .query(queryText)
    .then((result) => {
      console.log(result);
      res.sendStatus(202);
    })
    .catch((error) => {
      console.log("error making query", error);
      res.sendStatus(500);
    });
});

router.put("/:id", (req, res) => {
  console.log("hello from put request");
  let queryText = `UPDATE "tasks_list" SET "isDone" = true WHERE id =${req.params.id}; `;
  // res.sendStatus(202);
  pool
    .query(queryText)
    .then((result) => {
      console.log(result);
      res.sendStatus(202);
    })
    .catch((error) => {
      console.log("error making query", error);
      res.sendStatus(500);
    });
});

module.exports = router;
