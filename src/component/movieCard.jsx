const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
    return (
      <div className="movie" key={imdbID}>
        <div>
          <p>This is a {Type}.</p>
          <p>It was released: {Year}.</p>
          <p>And the IMDB ID: {imdbID}</p>
        </div>
        <div>
          <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/300"} alt={Title} />
        </div>
        <div>
          <h3>{Title} - {Type}</h3>
        </div>
      </div>
    );
  }
  export default MovieCard;