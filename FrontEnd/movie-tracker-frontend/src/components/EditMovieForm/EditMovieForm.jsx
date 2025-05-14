import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function EditMovieForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const { movie } = location.state || {};

  const [formData, setFormData] = useState({
    movieName: movie?.movieName || "",
    description: movie?.description || "",
    genre: movie?.genre || "",
    year: movie?.year || "",
    rating: movie?.rating || "",
    review: movie?.review || "",
    trailerURL: movie?.trailerURL || "",
    posterURL: movie?.posterURL || "",
    watched: movie?.watched || false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5050/movies/${movie._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Movie updated successfully!");
        navigate(`/movies/${movie._id}`);
      }
    } catch (error) {
      console.error("Error updating movie:", error);
    }
  };

  return (
    <div className="edit-form-container">
      <h2>Edit Movie</h2>
      <form onSubmit={handleSubmit}>
        <input name="movieName" value={formData.movieName} onChange={handleChange} placeholder="Movie Name" />
        <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
        <input name="genre" value={formData.genre} onChange={handleChange} placeholder="Genre" />
        <input name="year" value={formData.year} onChange={handleChange} placeholder="Year" />
        <input name="rating" value={formData.rating} onChange={handleChange} placeholder="Rating" />
        <input name="review" value={formData.review} onChange={handleChange} placeholder="Review" />
        <input name="posterURL" value={formData.posterURL} onChange={handleChange} placeholder="Poster URL" />
        <input name="trailerURL" value={formData.trailerURL} onChange={handleChange} placeholder="Trailer URL" />
        <label>
          <input type="checkbox" name="watched" checked={formData.watched} onChange={handleChange} />
          Watched
        </label>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}
