var express = require('express');
var router = express.Router();
const path = require('path');


/*------------------------------------------------ GET home page. */
router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.get('/index', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});




/*------------------------------------------------ GET search page. */
router.get('/search', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views/search.html'));
});



/*------------------------------------------------ GET login page. */
router.get('/login', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views/loginpage.html'))
});


/*------------------------------------------------ GET register page. */
router.get('/register', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views/registerpage.html'))
});

/*------------------------------------------------ GET newpost page. */
router.get('/newpost', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views/newpost.html'));
});




/*------------------------------------------------ GET dashboard */
router.get('/dashboard', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views/dashboard.html'));
});

/*------------------------------------------------ GET Manage post */
router.get('/manage-post', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views/manage-post.html'));
});




/*------------------------------------------------ GET about pages */
router.get('/about', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views/about.html'));
});

router.get('/about/roderic', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views/about/roderic.html'));
});

router.get('/about/chris', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views/about/chris.html'));
});

router.get('/about/deep', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views/about/deep.html'));
});

module.exports = router;
