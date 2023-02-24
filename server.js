const http = require('http');
const express = require('express');

app = express();



app.get('/', (req, res) => {
    console.log("hello")
    res.send("Hello World!!!")
})




app.listen(8080, function(){
    console.log("Server is running at 9099!!!!")
} )