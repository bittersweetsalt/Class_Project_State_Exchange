const mysql = require('mysql');

const pool = mysql.createConnection({

    connectionLimit: 10,        //Limits connection towards mysql
    password: 'csc648.07!',
    user: 'ubuntu',
    database: 'sfsu_posts',
    host: 'localhost',
    port: '3306'

});

pool.connect(function(err) {
if (!err) {
console.log('Connected to the MySQL server.');
}
else if (err)
{
return console.error('Timeout: ' + err.message);
}
});

let dataPull = {};

dataPull.all = () => {

    return new Promise((resolve, reject) => {
        
        // returning the entire database 
        pool.query('SELECT * FROM postDatabase', (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });

    });
};

let dataPull2 = {};

dataPull2.all2 = () => {
    return new Promise((resolve, reject) => {
        //returning the database organized by category
        pool.query('SELECT * FROM postDatabase ORDER by Price', (err, results) => {
            
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

// search by category 

module.exports = dataPull2;

module.exports = dataPull;
 