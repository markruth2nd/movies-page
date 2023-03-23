/* to fetch data from the API when the components load, I will need to use the useEffect hook in React. */

import React, { useState, useEffect } from "react";


/* import MovieCard from "../MovieCard"; */

import "../index";

//I have got my own API key which is fbdf1d80 to be added to API url variable below
const API_URL = 'http://www.omdbapi.com/?apikey=fbdf1d80'


const Omdb = () => {
    const [movies, setMovies ] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    /* below is the useEffect function which will call the useEffect hook for searching the movies and it will then store it in an array, so I have added the blank array '[]' where the results will be stored */
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