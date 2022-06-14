const mysql = require("mysql2");
const config = require("./config/config.json");
const connection = mysql.createConnection({
  host: config.development.host,
  user: config.development.username,
  password: config.development.password,
  database: config.development.database,
});

connection.connect((err) => {
  if (err) throw err;
  console.log("DB Connected!");
});

module.exports = connection;
