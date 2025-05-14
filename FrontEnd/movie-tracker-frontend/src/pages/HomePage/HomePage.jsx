import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="body">
    
      <div className="mainPage">
        <div className="container-md p-5 my-5 flex-fill">
          <h1>🎬 Welcome to Mel's Movie Tracker 🎬</h1>
          <p>
            🎥 Your personal spotlight for tracking films, shows and favorites
            in one place. Simple.Easy.Handy 🎥
          </p>
        </div>

        <div className="container mt-5">
          <div className="row">
            <div className="col-sm-4">
              <h3>Create Your Movie Tracker</h3>
              <p>
                Click here to start adding movies to your personalized tracker!
              </p>
              <button><Link to="/create">Create Tracker</Link></button>
            </div>
            <div className="col-sm-4">
              <h3>View Your Movie List</h3>
              <p>
                Click here to the Movie View Page to see the movies on your
                list!
              </p>
              <button><Link to="/movieviewpage">Movie View Page</Link></button>
            </div>
          </div>
        </div>

        <div className="container">
          <h1>Some of our Fav Movies this Month</h1>
          <p>Check them out! Add it to your Movie List!</p>

          <div className="moviePosters">
            <div className="d-flex justify-content-between">
              <div className="p-2">
                <img
                  src="./public/MoviePosters/waitingtoex.jpeg"
                  alt="Waiting to Exhale Movie Poster"
                />
              </div>
              <div className="p-2">
                <img
                  src="./public/MoviePosters/americangangster.jpeg"
                  alt="American Gangster Poster"
                />
              </div>
              <div className="p-2">
                <img
                  src="./public/MoviePosters/dothert.jpeg"
                  alt="Do the right thing poster"
                />
              </div>
              <div className="p-2">
                <img
                  src="./public/MoviePosters/meangirls.jpeg"
                  alt="Mean Girls poster"
                />
              </div>
              <div className="p-2">
                <img
                  src="./public/MoviePosters/mtf.jpeg"
                  alt="Meet the Fockers poster"
                />
              </div>
            </div>

            <div className="d-flex justify-content-between">
              <div className="p-2">
                <img
                  src="./public/MoviePosters/blinktwice .jpeg"
                  alt="Blink Twice poster"
                />
              </div>
              <div className="p-2">
                <img
                  src="./public/MoviePosters/notebook.jpeg"
                  alt="The Notebook poster"
                />
              </div>
              <div className="p-2">
                <img
                  src="./public/MoviePosters/pineapple.jpeg"
                  alt="Pineapple Express poster"
                />
              </div>
              <div className="p-2">
                <img
                  src="./public/MoviePosters/flight.jpeg"
                  alt="Flight poster"
                />
              </div>
              <div className="p-2">
                <img
                  src="./public/MoviePosters/unbreakable.jpeg"
                  alt="Unbreakable poster"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
