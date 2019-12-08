const mysql = require('mysql');



const db = mysql.createConnection({
    user: 'root',
    password: 'adaytof',
    database: 'sfsuDatabase',
    host: 'localhost',
    port: '3306'
})

module.exports = db;
