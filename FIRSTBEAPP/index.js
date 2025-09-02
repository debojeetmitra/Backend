
//including express module and initializing an app

const express = require('express');   //bringing the express
const app = express();                // initializing the express


//variable that stores the port number
const port = 3000;

app.get('/', (req, res) => {
    console.log("Hi guys");
})


//start your app or server
app.listen(port, () => {
    console.log("Application started bro");
});
