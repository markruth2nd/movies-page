/* to fetch data from the API when the components load, I will need to use the useEffect hook in React. */
import React, { useState, useEffect } from "react";
import MovieCard from "./movieCard";
import whiteSearch from "../images/whiteSearch.svg";

import "../App";
//I have got my own API key which is fbdf1d80 to be added to API url variable below
const API_URL = 'http://www.omdbapi.com/?apikey=fbdf1d80'


const Omdb = () => {
    const [movies, setMovies ] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        searchMovies("fast and furious");
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
                onChange={(e) => setSearchTerm(e.target.value)} 
                /* the on keyDown below will cause searches to happen while typing your search to speed the search and it will also allow the enter key to carry out the search instead of just using the onClick. This doesn't work as I would hope it would so would look into perfecting this in the future */
                onKeyDown={() => searchMovies(searchTerm)}/>
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

export default Omdb