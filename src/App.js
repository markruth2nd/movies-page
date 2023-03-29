import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Omdb from "./component/Omdb";
import Comedies from './pages/Comedies';
import Games from "./pages/Games";
import Anime from './pages/Anime';
import MovieRequest from './pages/MovieRequest';
// import Header from './component/Header';
import Navbar from './component/Navbar';


function App() {
    return (
    <Router>
<<<<<<< HEAD
=======
        {/* <Header /> */}
>>>>>>> a20be1ceac8bf9a15c67a93f226ad27997b7e84d
        <Navbar />
        <Routes>
            <Route path="/" element={<Omdb />} />
            <Route path="/comedies" element={<Comedies />} />
            <Route path="/games" element={<Games />} />
            <Route path="/anime" element={<Anime />} />
            <Route path="/movierequest" element={<MovieRequest />} />
        </Routes>
    </Router>
)}

export default App;


