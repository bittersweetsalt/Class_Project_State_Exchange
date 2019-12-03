const mysql = require('mysql');

/*
const db = mysql.createConnection({
    user: 'ubuntu',
    password: 'csc648.07',
    database: 'sfsuDatabase',
    host: 'localhost',
    port: '3306'
})
*/

const db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", //"dbuser", 
    password: "12345678", //"password",
    database: "state_exchange"
  });

module.exports = db;
