import React, { useState, useEffect } from "react";

/* import MovieCard from "../MovieCard"; */
import SearchIcon from "../search.svg";

import "../app.css";

const API_URL = 'http://www.omdbapi.com/?apikey=fbdf1d80'


const Omdb = () => {
    const [movies, setMovies ] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        searchMovies("");
      }, []);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    return (
        <div className="app">
            <h1>Search4Movies</h1>

            <div className="search">
                <input 
                placeholder="Search for Movies" 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} />

                <img src={SearchIcon} alt="search" 
                onClick={() => searchMovies(searchTerm)}/>
            </div>

        {movies?.length > 0
            ? (
            <div className="container">
            {movies.map((movie) => (
                <MovieCard movie={movie} />
            ))}
            </div>
            ) : (
                <div className="empty">
                    <h2>No Movies Found</h2>
                </div>
            )}
            </div>
    );
};

export default Omdb