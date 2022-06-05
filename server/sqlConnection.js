const mysql = require("mysql2");
const config = require("./config.json");

const connection = mysql.createConnection({
  host: config.MYSQL_HOST,
  user: config.MYSQL_USER,
  password: config.MYSQL_PASSWORD,
  database: config.MYSQL_DATABASE,
});

connection.connect((err) => {
  if (err) throw err;
  console.log("DB Connected!");
});

module.exports = connection;