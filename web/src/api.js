import express from 'express';

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.end(JSON.stringify( { "Hello":"World ! 3" }));
//  res.render('index', { title: 'Express' });
});

export default router;
