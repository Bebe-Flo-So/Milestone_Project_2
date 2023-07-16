const movie = require('../models/movie')

async function getAllMovie(req, res) {
      try {
         const movie = await Movie.find()
         res.json(movie)
     } catch (error) {
         console.log('error fetching movie:', error)
         res.json({ 'message': 'error fetching movie' })
     }
}
async function getMovieById(req, res) {
    try {
       const { id } = req.params
       const movie = await movie.findById(id)
       res.json(movie)    
   } catch (error) {
       console.log('error fetching movie by id:', error)
       res.json({ 'message': 'error fetching movie' })
   }
}
async function createMovie(req, res) {
    try {
        if (!req.body.image) req.body.image = undefined
       await new movie(req.body).save()
       res.status(201).json({ 'message': 'movie created'})    
   } catch (error) {
       console.log('error creating movie:', error)
       res.json({ 'message': 'error creating movie' })
   }
}
async function updateMovieById(req, res) {        
    try {
        if (!req.body.image) req.body.image = undefined
        await Movie.findByIdAndUpdate(req.body)
        res.status(204).json({ 'message': 'movie updated' })
    } catch (error) {
        console.log('error updating movie:', error)
        res.json({ 'message': 'error updating movie' })
    }
}
async function deleteMovieById(req, res) {
    try {
        const { id } = req.params
       await movie.findByIdAndDelete(id)
       res.status(204).json({ 'message': 'movie deleted'})    
   } catch (error) {
       console.log('error deleting movie:', error)
       res.json({ 'message': 'error deleting movie' })
   }
}
 module.exports = {
     getAllMovie,
     getMovieById,
     createMovie,
     updateMovieById,
     deleteMovieById

 }