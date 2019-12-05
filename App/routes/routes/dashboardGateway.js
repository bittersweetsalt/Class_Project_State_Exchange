const express = require('express');
const app = express();
app.use(express.json());
const db = require("../db/connection");

// getting the users postings 
app.get('/postings',(req,res) => {
    
    // code needs to be retrofitted to specfic user id 
    const queryString = `SELECT * FROM Posting `
    db.query(queryString, (err, rows, fields) => {
        if (err){
            console.log("Failed: " + err);
            res.end();
            return;
        }
      
        console.log('Found posting from specfic user...');
        res.send(rows);

    })
    .then(() => {
        res.json();
    })
    .catch((e) => {
        res.json({status:'error'});
    })
});

// updating a post that the user already had 
app.get('/update',(req,res) => {
    
    .then(() => {
        res.json();
    })
    .catch((e) => {
        res.json({status:'error'});
    })
});

// creating a new post , which redirects to newposting
app.get('/create',(req,res) => {
    res.redirect('/newpost');
});

// delete a post from the user
app.get('/delete',(req,res) => {
    const querystring = 
    .then(() => {
        res.json();
    })
    .catch((e) => {
        res.json({status:'error'});
    })
});