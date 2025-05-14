import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./CreateTrackerForm.css";
import { useState } from "react";


export default function CreateTrackerForm() {
  const [formData, setFormData] = useState({
    movieName: "",
    genre: "",
    year: "",
    description: "",
    rating: "",
    review: "",
    watched: false,
    posterURL: "",
    trailerURL: "",
  });
  
  const navigate = useNavigate()

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5050/movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      navigate("/movieviewpage")
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="movieName">Movie Title:</label>
      <input
        type="text"
        name="movieName"
        required
        value={formData.movieName}
        onChange={handleChange}
      ></input>
      <br></br>

      <label htmlFor="genre">Genre:</label>
      <input
        type="text"
        name="genre"
        required
        value={formData.genre}
        onChange={handleChange}
      ></input>
      <br></br>

      <label htmlFor="year">Year:</label>
      <input
        type="text"
        name="year"
        required
        value={formData.year}
        onChange={handleChange}
      ></input>
      <br></br>

      <label htmlFor="description">Description:</label>
      <input
        type="text"
        name="description"
        required
        value={formData.description}
        onChange={handleChange}
      ></input>
      <br></br>

      <label htmlFor="rating">Rating:</label>
      <input
        type="text"
        name="rating"
        required
        value={formData.rating}
        onChange={handleChange}
      ></input>
      <br></br>

      <label htmlFor="review">Review:</label>
      <input
        type="text"
        name="review"
        required
        value={formData.review}
        onChange={handleChange}
      ></input>
      <br></br>

      <label htmlFor="watched">I saw this movie:</label> 
      <input 
        type="checkbox"
        name="watched"
        checked={formData.watched}
        onChange={(e) =>
          setFormData({ ...formData, watched: e.target.checked })
        }
      /><br></br>

      <label htmlFor="posterURL">Movie Poster:</label>
      <input
        type="text"
        name="posterURL"
        required
        value={formData.posterURL}
        onChange={handleChange}
      ></input>
      <br></br>

      <label htmlFor="trailerURL">Trailer:</label>
      <input
        type="text"
        name="trailerURL"
        required
        value={formData.trailerURL}
        onChange={handleChange}
      ></input>
      <br></br>

      <button type="submit">Submit</button>
    </form>
  );
}
