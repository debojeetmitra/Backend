// it will store all item specific routes

const express = require('express');
const router = express.Router()


//define the about route
router.get('/', (req, res) => {
    // res.send("Got a GET request")
    res.sendFile('./dummy.html',
        {root:__dirname});
})

router.post('/items', (req,res) => {
    // res.send("Got a Post Request")
    res.json({x:1, y:2, z:3});
    

})

router.put('/items/:id', (req, res) => {
    res.send("Got a PUT Request");
})


router.delete('/items/:id', (req, res) => {
    res.send("Got a Delete Request");
})

module.exports = router