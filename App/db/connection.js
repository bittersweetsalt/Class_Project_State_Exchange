const mysql = require('mysql');


<<<<<<< HEAD
const db = mysql.createConnection({
    user: 'ubuntu',
    password: 'csc648.07',
    database: 'sfsuDatabase',
    host: 'localhost',
    port: '3306'
})

=======
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
    host: 'localhost',
    port: '3306'
})
>>>>>>> parent of 2a5ccf7... Combined with german-gen-express

module.exports = db;
