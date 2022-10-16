import "./App.css";
import React from 'react';
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';

function App() {
  return (
   <>
   <Navbar/>
   <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
   </Router>
   </>
  );
}


export default App;
