import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./EditMovieForm.css";

export default function EditMovieForm() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { movie } = state;

  const [formData, setFormData] = useState({
    movieName: movie?.movieName || "",
    description: movie?.description || "",
    genre: movie?.genre || "",
    year: movie?.year || "",
    rating: movie?.rating || "",
    review: movie?.review || "",
    watched: movie?.watched === true ? "Yes" : "No",
    posterURL: movie?.posterURL || "",
    trailerURL: movie?.trailerURL || "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  //using PUT to allow users to update movie information
  async function handleSubmit(e) {
    e.preventDefault();

    const formattedData = {
      ...formData,
      watched: formData.watched === "Yes",
    };
  
    try {
      const response = await fetch(
        `http://localhost:5050/movies/${movie._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formattedData),
        }
      );

      if (response.ok) {
        alert("Movie updated successfully!");
        navigate(`/movies/${movie._id}`);
      }
    } catch (error) {
      console.error(error);
    }
  } //sends the updated data to my backend using PUT. The backend updates the data and then redirects the user to the movie list page.

  return (
    <div className="edit-form-container">
      <div className="edit-form-header">
        <h2> ⏪ Edit Your Movie ⏪ </h2>
        <p>Anything changed??? Edit it here! </p>
      </div>

      <form className="edit-movie-form" onSubmit={handleSubmit}>
        <label>
          Movie Name:
          <input
            type="text"
            name="movieName"
            value={formData.movieName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Genre:
          <input
            type="text"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
          />
        </label>

        <label>
          Year:
          <input
            type="number"
            name="year"
            value={formData.year}
            onChange={handleChange}
          />
        </label>

        <label>
          Rating:
          <select name="rating" value={formData.rating} onChange={handleChange}>
            <option value="">Select Rating</option>
            <option value="⭐️">⭐️</option>
            <option value="⭐️⭐️">⭐️⭐️</option>
            <option value="⭐️⭐️⭐️">⭐️⭐️⭐️</option>
            <option value="⭐️⭐️⭐️⭐️">⭐️⭐️⭐️⭐️</option>
            <option value="⭐️⭐️⭐️⭐️⭐️">⭐️⭐️⭐️⭐️⭐️</option>
          </select>
        </label>

        <label>
          Review:
          <textarea
            name="review"
            value={formData.review}
            onChange={handleChange}
          />
        </label>

        <label>
          Watched?:
          <select
            name="watched"
            value={formData.watched}
            onChange={handleChange}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>

        <label>
          Poster URL:
          <input
            type="text"
            name="posterURL"
            value={formData.posterURL}
            onChange={handleChange}
          />
        </label>

        <label>
          Trailer URL:
          <input
            type="text"
            name="trailerURL"
            value={formData.trailerURL}
            onChange={handleChange}
          />
        </label>

        <div className="edit-buttons">
          <button type="submit">Update Movie</button>
        </div>
      </form>
    </div>
  );
}
