import "./App.css";
import React from 'react';
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import UserProfile from "./Components/UserProfile";

function App() {
  return (
   <>
   <Navbar/>
   <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/userprofile" element={<UserProfile/>}/>
    </Routes>
   </Router>
    <Footer/>
   </>
  );
}


export default App;
