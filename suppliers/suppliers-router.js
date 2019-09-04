const express = require('express')

const router = express.Router();
router.use(express.json());
function uppercaser(req, res, next){
    let name = req.params.name;
    if(name){
        req.name = name.toUpperCase();
    }
    next()

}

router.get('/', (req, res)=> {
    res.send('get to /suppliers/')
})
router.get('/:name', uppercaser, (req, res)=> {
    res.send(`get ti /suppliers/${req.name}`)
})


module.exports = router;