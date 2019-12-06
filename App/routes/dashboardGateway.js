const express = require('express');
const app = express();
app.use(express.json());
const db = require("../db/connection");

// getting the users postings 
app.get('/postings/:id',(req,res) => {
    
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
app.get('/update/:id',(req,res) => {
    
    const queryString = 'UPDATE'
    db.query(queryString, (err, rows, fields) => {
        if (err){
            console.log("Failed: " + err);
            res.end();
            return;
        }
      
        console.log('Updated posting from specific user');
        res.send(rows);

    })
    .then(() => {
        res.json();
    })
    .catch((e) => {
        res.json({status:'error'});
    })
});

// creating a new post , which redirects to newposting
app.get('/create/id',(req,res) => {
    res.redirect('/newpost/:id');
});

// delete a post from the user
app.get('/delete/:id',(req,res) => {
    const queryString = "DELETE FROM sfsuDatabase WHERE id = `id` LIMIT 1"
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