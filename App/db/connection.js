const mysql = require('mysql');


const db = mysql.createConnection({
    user: 'ubuntu',
    password: 'csc648.07',
    database: 'sfsuDatabase',
    host: 'localhost',
    port: '3306'
})


module.exports = db;
