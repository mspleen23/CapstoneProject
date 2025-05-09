import express from 'express';
import * as moviesController from '../Controllers/movies-controller.mjs'
const router = express.Router();

/////////Routes 
////////////////////////////////////////// 

//Seed
router.get('/seed', moviesController.seedMovies );

// //Index
// router.get('/', moviesController.getMovies);

// //Delete
// router.delete('/:id', moviesController.deleteMovie);

// //Update
// router.put('/:id', moviesController.updateMovie)

// //Create
// router.post('/', moviesController.createMovie);

// //Show 
// router.get('/:id', moviesController.getMovie);



export default router; 