const express = require('express')
const app = express()
const port = 3000

// //loading middleware into the app
// //inbuild middleware
// app.use(express.json());


// //middleware - logging , auth , validation

// const loogingMiddleware = function(req, res, next){
//     console.log("Logging Kar raha hu");
//     next();
// }

// //loading middleware into application
// app.use(loogingMiddleware);

// const authMiddleware = function(req, res, next){
//     console.log("auth kar raha hu");
//     res.send("Chalo seedha ghar");
//     // next();
// }

// app.use(authMiddleware);

// const validationMiddleware = function(req, res, next){
//     console.log("validation kar raha hu");
//     next();
// }

// app.use(validationMiddleware);

const route = require('./routes/route')
//mounting the routes
app.use('/api', route)

// -> /api/student
// -> /api/admin


app.get('/', (req, res) => {
    console.log("Main route handler hun")
    console.log(req.body);
    res.send('Hi');
})

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})