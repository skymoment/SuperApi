var express = require('express');
var router = express.Router();

// 首页路由
router.get('/', function(req,res){
    // res.type('text/plain');
    // res.send('hello, this is server');
    res.render('index', { title: 'Hey', message: 'Hello there!'});
});

// 定制404页面
router.use(function(req, res) {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

// 定制500页面
router.use(function(req, res) {
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});

module.exports = router;