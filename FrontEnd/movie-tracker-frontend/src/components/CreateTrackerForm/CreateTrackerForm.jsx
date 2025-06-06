import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateTrackerForm.css";

export default function CreateTrackerForm() {
  const [formData, setFormData] = useState({
    movieName: "",
    genre: "",
    year: "",
    description: "",
    rating: "",
    review: "",
    watched: "No",
    posterURL: "",
    trailerURL: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  //using POST in the handle Submit to create a new movie entry
  async function handleSubmit(e) {
    e.preventDefault(); //stops page from reloading
    const formattedData = {
      ...formData,
      watched: formData.watched === "Yes",
    };

    try {
      const response = await fetch("http://localhost:5050/movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedData),
      });

      const data = await response.json();
      navigate("/movieviewpage");
    } catch (error) {
      console.error(error);
    }
  } //sends the form data to my backend using POST. The backend saves the data and then redirects the user to the movie list page.

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="movieName">Movie Title:</label>
      <input
        type="text"
        id="movieName"
        name="movieName"
        required
        value={formData.movieName}
        onChange={handleChange}
      />
      <br />

      <label htmlFor="genre">Genre:</label>
      <input
        type="text"
        id="genre"
        name="genre"
        required
        value={formData.genre}
        onChange={handleChange}
      />
      <br />

      <label htmlFor="year">Year:</label>
      <input
        type="number"
        id="year"
        name="year"
        required
        value={formData.year}
        onChange={handleChange}
      />
      <br />

      <label htmlFor="description">Description:</label>
      <input
        type="text"
        id="description"
        name="description"
        required
        value={formData.description}
        onChange={handleChange}
      />
      <br />

      <label htmlFor="rating">Rating:</label>
      <select
        id="rating"
        name="rating"
        value={formData.rating}
        onChange={handleChange}
      >
        <option value="">Select Rating</option>
        <option value="⭐️">⭐️</option>
        <option value="⭐️⭐️">⭐️⭐️</option>
        <option value="⭐️⭐️⭐️">⭐️⭐️⭐️</option>
        <option value="⭐️⭐️⭐️⭐️">⭐️⭐️⭐️⭐️</option>
        <option value="⭐️⭐️⭐️⭐️⭐️">⭐️⭐️⭐️⭐️⭐️</option>
      </select>

      <br />

      <label htmlFor="review">Review:</label>
      <input
        type="text"
        id="review"
        name="review"
        value={formData.review}
        onChange={handleChange}
      />
      <br />

      <label htmlFor="watched">Watched?: </label>
      <select
        id="watched"
        name="watched"
        value={formData.watched}
        onChange={handleChange}
      >
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    
      <br />

      <label htmlFor="posterURL">Movie Poster:</label>
      <input
        type="text"
        id="posterURL"
        name="posterURL"
        value={formData.posterURL}
        onChange={handleChange}
      />
      <br />

      <label htmlFor="trailerURL">Trailer:</label>
      <input
        type="text"
        id="trailerURL"
        name="trailerURL"
        value={formData.trailerURL}
        onChange={handleChange}
      />
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}
