const mysql = require('mysql');

const connection = mysql.createConnection({
    user: 'ubuntu',
    password: 'csc648.07',
    database: 'sfsuDatabase',
    host: 'localhost',
    port: '3306'
})

module.exports = connection;

/*
old connection POOL method. Depreciated
const db = mysql.createPool({
    connectionLimit: 10,        //Limits connection towards mysql
    
});


*/