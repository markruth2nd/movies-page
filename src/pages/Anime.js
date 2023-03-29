import React, { useState, useEffect } from "react";


import MovieCard from "../component/movieCard";
import whiteSearch from "../images/whiteSearch.svg";

import "../App.css";

const API_URL = 'https://www.omdbapi.com/?apikey=fbdf1d80'


const Anime = () => {
    const [movies, setMovies ] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        searchMovies("Dragon Ball Z");
      }, []);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    return (
        <div className="app">

            <div className="container">
                <input
                id="movieSearh"
                placeholder="Type Movie..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} />
                <img src={whiteSearch} id="Icon" alt="Icon" 
                onClick={() => searchMovies(searchTerm)}/>
            </div>

        {movies?.length > 0
            ? (
            <div className="movieContainer">
            {movies.map((movie) => (
                <MovieCard movie={movie} />
            ))}
            </div>
            ) : (
                <div className="empty">
                    <h2>Movie Not Found</h2>
                </div>
            )}
            </div>
    );
};

export default Anime