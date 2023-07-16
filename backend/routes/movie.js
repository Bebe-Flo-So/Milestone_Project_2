const router = require('express').Router()
const { Router } = require('express')
  const {
     getAllMovie,
     getMovieById,
     createMovie,
     updateMovieById,
     deleteMovieById
 } = require('../controllers/movie')

 //GET / get all movies
 router.get('/', getAllMovie)

 //GET /:id get movie by id
 router.get('/:id', getMovieById)

 //POST/ create movie
 router.post('/', createMovie)

 //PUT /: id update movie by id
 router.put('/:id', updateMovieById)

//DELETE /: id delete movie by id
router.delete('/:id', deleteMovieById)

 module.exports = router