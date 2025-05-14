import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./MovieShowPage.css";

export default function MovieShowPage() {
    const{ id }= useParams();
    const [movie, setMovie] = useState([]);


  useEffect(() => {
    async function getMovie() {
      try {
        console.log(id)
        const response = await fetch(`http://localhost:5050/movies/${id}`);
        const data = await response.json();
        // console.log(data)
        setMovie(data);
      } catch (error) {
        console.error(error);
      }
    }

    getMovie();
  }, [id]);

  return (
    <div className="main">
      <header>
        <h1>Your Movie List!</h1>
        <p>Feel free to add, delete, update your movies!</p>
      </header>

      <div className="movie-container">
            <div key={movie._id} className="movie-card">
              <img src={movie.posterURL} alt={movie.movieName} />
              <h3>{movie.movieName}</h3>
              <p>{movie.description}</p>
              <p><strong>Genre:</strong> {movie.genre}</p>
              <p><strong>Year:</strong> {movie.year}</p>
              <p><strong>Rating:</strong> {movie.rating || "No rating yet"}</p>
              <p><strong>Review:</strong> {movie.review || "No review yet"}</p>
              <p><strong>Watched:</strong>{movie.watched} </p>
              <a href={movie.trailerURL} target="_blank" rel="noopener noreferrer">Watch Trailer</a>
            </div>
      </div>
      </div>
  );
}

