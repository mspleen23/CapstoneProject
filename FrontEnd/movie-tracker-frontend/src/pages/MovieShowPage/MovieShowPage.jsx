import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./MovieShowPage.css";

export default function MovieShowPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function getMovie() {
      try {
        console.log(id);
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

  async function handleDelete() {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this movie?"
    );
    if (!confirmDelete) return;

    try {
      const response = await fetch(`http://localhost:5050/movies/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        navigate("/movieviewpage");
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function handleEdit() {
    navigate("/editmovie", { state: { movie } });


    
  //   const updateMovie = {
  //     ...movie,
  //     // review: prompt("Enter new review:", movie.review) || movie.review,
  //   };

  //   try {
  //     const response = await fetch(`http://localhost:5050/movies/${id}`, {
  //       method: "PUT",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(updateMovie),
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       setMovie(data);
  //       alert("Movie updated!");
  //       navigate(`/movies/${id}`);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
   }

  return (
    <div className="show-page-main">
      <div className="header">
        <h1>🎟️ Movie Show Page 🎟️ </h1>
        <p>Here is more info on the movie you selected</p>
      </div>

      <div className="show-page-content">
        <div className="show-page-movie-container">
          <div key={movie._id} className="show-page-movie-card">
            <div className="show-page-movie-poster">
              <img src={movie.posterURL} alt={movie.movieName} />
              <h3>{movie.movieName}</h3>
            </div>

            <div className="movie-details">
            <p>{movie.description}</p>
            <p>
              <strong>Genre:</strong> {movie.genre}
            </p>
            <p>
              <strong>Year:</strong> {movie.year}
            </p>
            <p>
              <strong>Rating:</strong> {movie.rating || "No rating yet"}
            </p>
            <p>
              <strong>Review:</strong> {movie.review || "No review yet"}
            </p>
            <p>
              <strong>Watched?:</strong>
              {movie.watched}{"No"}
            </p>
            <a href={movie.trailerURL || "https://www.youtube.com/embed/dQw4w9WgXcQ"} target="_blank" rel="noopener noreferrer">
  Watch Trailer
</a>

            </div>
          </div>

          <div className="show-page-buttons">
            <button onClick={handleDelete}>Delete Movie</button>
            <button onClick={handleEdit}>Update Movie</button>
          </div>
      </div>
    </div>
    </div>
  );
}
