const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.get('/',(req, res) =>{
    res.send('welcome to our project')
})
app.listen(3000,() => {
    console.log('listen on port 3000')
})