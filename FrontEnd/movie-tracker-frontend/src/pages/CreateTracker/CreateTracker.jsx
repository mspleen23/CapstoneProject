import React from 'react'
import "./CreateTracker.css"
import CreateTrackerForm from '../../components/CreateTrackerForm/CreateTrackerForm';

export default function CreateTracker() {
    return (
    <div className="main">
        <h1>Movie Tracker</h1>
        <p>Create a new tracker or add a movie to your current movie tracker</p>
        <CreateTrackerForm/>
    </div>
  )
}
