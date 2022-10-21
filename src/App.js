import "./App.css";
import React from 'react';
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import UserProfile from "./Components/UserProfile";
import OnlieneConsltancy from "./Components/OnlieneConsltancy";
import BookDoctor from "./Components/BookDoctor";

function App() {
  return (
   <>
   <Navbar/>
   <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/userprofile" element={<UserProfile/>}/>
      <Route path="/onlieneconsltancy" element={<OnlieneConsltancy/>}/>
      <Route path="/bookdoctor" element={<BookDoctor/>}/>
    </Routes>
   </Router>
    <Footer/>
   </>
  );
}


export default App;
