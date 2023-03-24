import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
<<<<<<< HEAD
=======
/* import Omdb from "./component/Omdb"; */
>>>>>>> 55708408694db41b3d836b32fd9606afc92d1d62
import Omdb from "./component/Omdb";
import Comedies from './pages/Comedies';
import Anime from './pages/Anime';
import MovieRequest from './pages/MovieRequest';
<<<<<<< HEAD


function App() {
    return (
    <Router>
=======
function App() {
    return (
    <Router basename='/movies-page'>
>>>>>>> 55708408694db41b3d836b32fd9606afc92d1d62
        <Routes>
            <Route path="/" element={<Omdb />} />
            <Route path="/comedies" element={<Comedies />} />
            <Route path="/anime" element={<Anime />} />
            <Route path="/movierequest" element={<MovieRequest />} />
        </Routes>
    </Router>
)}
<<<<<<< HEAD

=======
>>>>>>> 55708408694db41b3d836b32fd9606afc92d1d62
export default App;