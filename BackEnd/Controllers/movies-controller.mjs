//////Callback Functions File
import Movie from '../Models/movies-model.mjs';

async function seedMovies(req,res) {
try{
   await Movie.deleteMany({});
   await Movie.create(
    {
        movieName:"Meet the Fockers", 
        genre: "Comedy",
        year: "2004" ,
        description:"After gaining Jack Byrnes' approval to marry his daughter, Greg Focker introduces his straight-laced in-laws to his unconventional and eccentric parents, the Fockers." ,
        rating:"⭐⭐⭐⭐" , 
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu molestie magna. Vestibulum quis rhoncus felis. Ut volutpat consequat magna sit amet feugiat. Morbi rutrum mi nec augue tempor, vitae viverra felis tincidunt.",
        watched: true,
        posterURL:"https://static0.srcdn.com/wordpress/wp-content/uploads/2024/02/ybftroaxpdlj2amdcjvdmcadugujo8.jpg" ,
        trailerURL:"https://www.youtube.com/watch?v=JG5NnOIKeew"
   },
   {
    movieName: "Unbreakable", 
    genre: "Thriller" ,
    year: "2000",
    description:"Bruce Willis plays a man who survives a horrific train crash seemingly unharmed, discovering he may possess superhuman abilities." ,
    rating:"", 
    review:" ",
    watched: true,
    posterURL:"https://m.media-amazon.com/images/S/pv-target-images/95f48c6cca01dfc95c51d0d6624c77c2c91cb92afdd01884c516a46a514dfcc6.jpg" ,
    trailerURL: "https://youtu.be/fNeCB2ALNoA"
},
{
    movieName: "Flight" , 
    genre: "Action",
    year: "2012",
    description: "Airline pilot Whip Whitaker, who, after saving nearly all the passengers on his plane from a catastrophic crash, is thrust into the spotlight as a hero. However, his struggles with addiction and a past night of excess come to light, forcing him to confront his demons and the consequences of his actions. ",
    rating: "", 
    review: "",
    watched:false,
    posterURL:"https://upload.wikimedia.org/wikipedia/en/0/0e/Flight_film_poster.jpg" ,
    trailerURL:"https://www.youtube.com/watch?v=WmjawuFvDu4&t=93" 
},
{
    movieName: "Waiting to Exhale", 
    genre: "Romance" ,
    year: "1995" ,
    description: "Four African American women navigating their complex relationships with men, seeking the `Real Thing` – true love.",
    rating: "⭐⭐⭐⭐", 
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu molestie magna. Vestibulum quis rhoncus felis. Ut volutpat consequat magna sit amet feugiat. Morbi rutrum mi nec augue tempor, vitae viverra felis tincidunt." ,
    watched: true,
    posterURL: "https://m.media-amazon.com/images/M/MV5BZWU4NzA3MDQtODYyOS00OTliLTk3MGEtYzM2ZjNkZmI5ODk5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    trailerURL:"https://youtu.be/t5iE3Wt2cJs" 
},
{
    movieName:"Pineapple Express" , 
    genre:"Comedy" ,
    year: "2008",
    description: "The plot centers on a process server and his marijuana dealer as they are forced to flee from hitmen and a corrupt police officer after witnessing them commit a murder.",
    rating: "⭐⭐⭐⭐", 
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu molestie magna. Vestibulum quis rhoncus felis. Ut volutpat consequat magna sit amet feugiat. Morbi rutrum mi nec augue tempor, vitae viverra felis tincidunt.",
    watched:true,
    posterURL: "https://static.wikia.nocookie.net/pineappleexpress/images/4/49/Pineapple_express_ver4_xlg.jpg/revision/latest?cb=20140215024716" ,
    trailerURL: "https://youtu.be/BWZt4v6b1hI"
},
) 
res.status(201).json({sucess:'Database seeded.'})
// .redirect('/movies'); //means create it and then redirect to the users route where all the movies will be found
} catch(error) {
    res.status(400).json({error: error.message })
}
}


async function getMovies(req,res){
    try{
        const movies= await Movie.find({});
        res.status(200).json(movies);
    }catch(error){
        res.status(400).json({error: error.message});
    }
}

// async function createMovie(req,res){
//     try{
//         const movie= await Movie.create(req.body);
//         res.status(201).json(movie);
//     }catch(error){
//         res.status(400).json({error: error.message});
//     }
// }

// async function deleteMovie(req,res){
//         try{
//             const deleteMovie = await Movie.findByIdAndDelete(req.params.id);
//             res.status(200).redirect('/movies');
//         }catch(error){
//             res.status(400).json({error: error.message});
//         }
// }

// async function updateMovie(req,res){
//     try{
//         const updateMovie= await Movie.findByIdAndUpdate(req.params.id,req.body, {new: true});
//         res.status(200).redirect('/movies');
//     }catch(error){
//         res.status(400).json({error: error.message});
//     }
//     }

//     async function getMovie(req,res){
//         try{
//             const getMovie= await Movie.findById(req.params.id);
//             res.status(200).json(getMovie);
//         }catch(error){
//             res.status(400).json({error: error.message});
//         }
//     }


export{
    seedMovies,
    getMovies,
    // createMovie,
    // deleteMovie,
    // updateMovie,
    // getMovie, 
 }