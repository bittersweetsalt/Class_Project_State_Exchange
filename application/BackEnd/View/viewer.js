const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const myData = require("../Model/database.js");

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname, '/about.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/testmysql', async function(req, res){
  console.log("Found database.js and currently working to get database");
  
  try {
    let results = await myData.all();
    res.json(results);
  }
  catch(e){
    console.log(e);
    res.sendStatus(500);
  }
});


/* Will probably reuse or Template on how to get request and resend html file
router.get('/ChrisInfo',function(req,res){
  res.sendFile(path.join(__dirname, '/ChrisInfo.html'));
});

router.get('/DeepInfo',function(req,res){
  res.sendFile(path.join(__dirname, '/DeepInfo.html'));
});


router.get('/RodericInfo',function(req,res){
  res.sendFile(path.join(__dirname, '/RodericInfo.html'));
});
*/

router.get('/', async (req, res, next) => {

    try{
        let results = await db.all();
        res.json(results);
    } catch(e){
        console.log(e);
        res.sendStatus(500);
    }

});


//add the router
app.use('/', router, express.static(path.join(__dirname, '../public')));
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');

//module.exports = router;