import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import './App.css'
import Watchlist from './pages/Watchlist/Watchlist';
import MovieShowPage from './pages/MovieShowPage/MovieShowPage';
import CreateTracker from './pages/CreateTrackerPage/CreateTracker';

function App() {
  return(
    <>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/watchlist" element={<Watchlist/>} />
      <Route path="/movies" element={<MovieShowPage/>} />
      <Route path="/create" element={<CreateTracker/>} />
    </Routes>
    </>
  )
}

export default App
