import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import './App.css'

import HomePage from './pages/HomePage/HomePage';
import Watchlist from './pages/MoviesViewPage/MoviesViewPage';
import MovieShowPage from './pages/MovieShowPage/MovieShowPage';
import CreateTracker from './pages/CreateTrackerPage/CreateTracker';


function App() {
  return(
    <div className="App"> 
    <NavBar/>
    
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/watchlist" element={<Watchlist/>} />
      <Route path="/movies" element={<MovieShowPage/>} />
      <Route path="/create" element={<CreateTracker/>} />
    </Routes>
   
    </div>
  );
}

export default App
