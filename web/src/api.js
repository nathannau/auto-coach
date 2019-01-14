import express from 'express';

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(res.end);
    res.json({ "Hello":"World ! 3" });
    res.end();
    //res.end(JSON.stringify( { "Hello":"World ! 3" }));
//  res.render('index', { title: 'Express' });
});

/* GET annotations. */
router.get('/annotations', function(req, res, next) {
    console.log(res.end);
    res.json([
        { "name":"stop", "path":"icons/stop.png" },
        { "name":"no-stopping", "path":"icons/no-stopping.png" },
        { "name":"prohibited", "path":"icons/prohibited.png" },
        { "name":"speed-limit", "path":"icons/speed-limit.png" },
        { "name":"traffic-lights", "path":"icons/traffic-lights.png" },
    ]);
    res.end();
    //res.end(JSON.stringify( { "Hello":"World ! 3" }));
//  res.render('index', { title: 'Express' });
});
//GetAnnotations

export default router;
