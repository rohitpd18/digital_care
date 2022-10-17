import "./App.css";
import React from 'react';
// import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';

function App() {
  return (
   <>
    <Navbar/>
    <Home/>
   </>
  );
}


export default App;
