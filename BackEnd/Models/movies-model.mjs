import mongoose from 'mongoose'; 

// Schema set up: mongoose.model(name of the model, schema for the model to follow)
const movieSchema= new mongoose.Schema(
    {
    movieName: {type: String, required: true}, 
    genre: {type: String,required: true},
    year: {type: Number, required: true},
    description:{type: String, required:true, maxlength:500},
    rating: {type:String}, 
    review: {type:String, maxlength:500},
    watched:{type:Boolean, required:true},
    posterURL:{type: String, default: "https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-768x1129.jpg"},
    trailerURL: { type: String, default: 'https://www.youtube.com/embed/dQw4w9WgXcQ'}
  },
    //this will automatically create a "created and updated at" states
    { timestamps: true }

);

const Movie = mongoose.model('Movie', movieSchema)
export default Movie;
