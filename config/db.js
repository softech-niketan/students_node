const mysql = require("mysql2/promise");

const mysqlpool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "student",
});
module.exports = mysqlpool;
