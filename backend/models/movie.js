const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
     name: {
         type: String,
         require: true
    },
     genre: {
         type: String,
     },
     rating: {
         type: Boolean
        

     }
 })

 module.exports = mongoose.model('movie', movieSchema)