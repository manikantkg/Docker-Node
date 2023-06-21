const http = require('http');
const express = require('express');

app = express();



app.get('/', (req, res) => {
    console.log("hello")
    res.send("Hello World!!!")
});


app.get('/hai', (req, res) => {
    console.log("hai")
    res.send("Hai World!!!")
})





app.listen(8080, function(){
    console.log("Server is running at 8080!!!!")
} )