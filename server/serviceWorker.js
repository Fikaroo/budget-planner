const express = require("express");
const cors = require("cors");
const app = express();
const database = require("./sqlConnection");
const port = 3001;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/expenses", (req, res) => {
  database.query("SELECT * FROM expenses", (err, row) => {
      if (err) {
          res.status(500).send(`Throw err` + err)
      }
    res.json(row);
  });
});

app.post("/addexpense", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const cost = req.body.cost;
  const addExpense = "INSERT INTO expenses (id,name,cost) VALUES (?,?,?);";
  database.query(addExpense, [id, name, cost], (err, result) => {
    if (err) throw err;
    res.send(result);
    console.log("added");
  });
});

app.post("/addbudget", (req, res) => {
  const budget = req.body.budget;
  const addExpense = "INSERT INTO budget (budget) VALUES ?;";
  database.query(addExpense, budget, (err, result) => {
    if (err) throw err;
    res.send(result);
    console.log("added");
  });
});

app.delete("/delexpense/:id", (req, res) => {
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
