import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
import "./CreateTrackerForm.css";

export default function CreateTrackerForm(){
const [formData, setFormData] = useState({
  movieName: "",
  genre:"",
  year: "",
  description:"",
  rating:"",
  review:"",
  watched: false,
  posterURL:"",
  trailerURL:"",
});

const navigate = useNavigate();

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
        navigate("/movieviewpage"); 
        }catch (error) {
          console.error(error);
        }
  }

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
        type="text"
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
      <input
        type="text"
        id="rating"
        name="rating"
        value={formData.rating}
        onChange={handleChange}
      />
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

      <label htmlFor="watched" style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "15px" }}>Watched?</label>
      <input
        type="checkbox"
        id="watched"
        name="watched"
        checked={formData.watched}
        onChange={(e) =>
          setFormData({ ...formData, watched: e.target.checked })
        }
      />
      <br />

      <label htmlFor="posterURL">Movie Poster:</label>
      <input
        type="text"
        id="posterURL"
        name="posterURL"
        required
        value={formData.posterURL}
        onChange={handleChange}
      />
      <br />

      <label htmlFor="trailerURL">Trailer:</label>
      <input
        type="text"
        id="trailerURL"
        name="trailerURL"
        required
        value={formData.trailerURL}
        onChange={handleChange}
      />
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}
