import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import './App.css'

import HomePage from './pages/HomePage/HomePage.jsx'
import CreateTracker from './pages/CreateTracker/CreateTracker.jsx';
import MovieViewPage from './pages/MovieViewPage/MovieViewPage.jsx';
import MovieShowPage from './pages/MovieShowPage/MovieShowPage.jsx';


function App() {
  return(
    <div className="App"> 
    <NavBar/>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/create" element={<CreateTracker/>} /> 
      <Route path="/movieviewpage" element={<MovieViewPage/>}/>
      <Route path= "/movies/:id" element={<MovieShowPage/>}/>
    </Routes>
   <Footer/>
    </div>
  );
}

export default App
