import React from 'react'

export default function MoviesViewPage() {
  return (
    <div>MoviesViewPage</div>
  )
}



// import React from 'react';
// import { useState, useEffect } from 'react';
// import CreateMovieTrackerForm from '../../components/CreateMovieTracker/CreateMovieTrackerForm';
// import WatchList from '../../components/WatchList/WatchList';


// export default function HomePage() {
//     const [movies, setMovies] = useState(null);

//     useEffect(() => {
//         async function getMovies(){
//             try{
//                 const response = await fetch('http://localhost:5050/movies');
//                 const data= await response.json();
//                 setMovies(data);

//             }catch (error){
//                 res.status(400).json({error: error.message});
//             }
//         }
//         getMovies();
//     }, [])

//   return (
//     <div>
//         <CreateMovieTrackerForm/>
//         <WatchList/>
//     </div>
//   )
// }
