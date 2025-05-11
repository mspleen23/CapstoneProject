import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../../assets/MovieLogo.webp'
import userProfile from '../../assets/userIcon.avif'

export default function NavBar() {
  return (
    <div className="sidebar">
      <div className="logo-section">
        <img src={logo} alt="Logo" className="logo"/> <br></br>
        <h1>Movie Tracker</h1>
      </div>

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/watchlist">Watchlist</Link></li>
          <li><Link to="/create">Add Movie</Link></li>
        </ul>
      </nav>

      <div className="profile-section">
        <img src={userProfile} alt="User" className="profile-img" />
      </div>
    </div>
  );
}

