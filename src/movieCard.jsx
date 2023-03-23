import React from 'react';

const MovieCard = () => {
    return(
        <div className = "movie">
            <div>
                <p>{movie1.Year}</p>
            </div>

            <div>
                <img src={movie1.Poster !== 'N/A' ? Poster : "https://via.placeholder.com/400"} alt = {Title}/>
            </div>

            <div>
                <span>{Type}</span>
                <h3>{Title}</h3>
            </div>
        </div>   
    );
}