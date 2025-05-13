import React from 'react'
import {useState, useEffect} from 'react'
import "./CreateTracker.css"
// import CreateTrackerForm from "../../components/CreateTrackerForm/CreateTrackerForm.jsx"
import {Link} from "react-router-dom";

export default function CreateTracker() {
    return (
    <div>
        <h1>This is my create tracker</h1>
        <CreateTrackerForm/>
    </div>
  )
}
