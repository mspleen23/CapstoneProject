import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./MovieViewPage.css";


export default function MovieViewPage() {
  const [viewpage, setViewpage] = useState([]);

  useEffect(() => {
    async function seedMovies() {
      try {
        const response = await fetch('http://localhost:5050/movies');
        const data = await response.json();
        // console.log(data)
        setViewpage(data);
      } catch (error) {
        console.error(error);
      }
    }

    seedMovies();
  }, []);

  return (
    <div className="main">
      <header>
        <h1>🍿 Your Movie List! 🍿</h1>
        <p>Feel free to add, delete or update your movies!</p>
      </header>

      <div className="movie-container">
        {viewpage && viewpage.map((movie) => (
            <div key={movie._id} className="movie-card">
              <img src={movie.posterURL} alt={movie.movieName} />
              <Link to={`/movies/${movie._id}`}><h3>{movie.movieName}</h3></Link>
              <p>{movie.year}</p>
            </div>
          ))}
      </div>
      </div>
  );
}
