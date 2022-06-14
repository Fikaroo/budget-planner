const express = require("express");
const cors = require("cors");
const app = express();
const database = require("./sqlConnection");
const port = 3001;
let insert = false;
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/expenses", (req, res) => {
  database.query("SELECT * FROM expenses", (err, row) => {
    if (err) {
      res.status(500).send(`Throw err` + err);
    }
    res.json(row);
  });
});

app.post("/addexpense", (req, res) => {
  const key = req.body.key;
  const name = req.body.name;
  const cost = req.body.cost;
  const addExpense = "INSERT INTO expenses (`key`,`name`,cost) VALUES (?,?,?);";
  database.query(addExpense, [key, name, cost], (err, result) => {
    if (err) throw err;
    res.send(result);
    console.log("added");
  });
});

app.post("/addbudget", (req, res) => {
  const budget = req.body.budget;
  let addExpense;
  if (!insert) {
    addExpense = "INSERT INTO budgets (budget) VALUES (?)";
    insert = true;
  } else {
    addExpense = "UPDATE budgets SET budget=?;";
  }

  database.query(addExpense, budget, (err, result) => {
    if (err) throw err;
    res.send(result);
    console.log("added");
  });
});

app.get("/budget", (req, res) => {
  database.query("SELECT * FROM budgets", (err, row) => {
    if (err) {
      res.status(500).send(`Throw err` + err);
    }
    res.json(row);
  });
});

app.delete("/deleteexpense/:id", (req, res) => {
  const id = req.params.id;
  const deleteExpense = "DELETE FROM expenses WHERE id = ?";
  database.query(deleteExpense, id, (err, result) => {
    if (err) throw err;
    res.send(result);
    console.log("deleted");
  });
});

app.listen(port, () => {
  console.log(`app litening on port ${port}`);
});
