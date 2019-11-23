const mysql = require('mysql');

// const db = mysql.createConnection({
//     user: 'ubuntu',
//     password: 'csc648.07',
//     database: 'sfsuDatabase',
//     host: 'localhost',
//     port: '3306'
// })

const db = mysql.createConnection({
    user: 'root',
    password: 'Butter000',
    database: 'test_db',
    host: '127.0.0.1',
    port: '3306'
})

module.exports = db;
