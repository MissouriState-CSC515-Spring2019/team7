import React from 'react';
import { Link } from "react-router-dom";

const Movies = props => (
    <div className="container">
        <div className="row">
        
        {props.movies.map((movie) => {
            return (
            <div>
              {movie.poster_path && <img src={`http://image.tmdb.org/t/p/w185${movie.poster_path}`} alt="Movie Poster"/>}
              {movie.poster_path && movie.title && <p key={movie.id}><span>{movie.title}</span></p>}
              {movie.poster_path && movie.release_date && <p key={movie.id}>Release Date: <span>{movie.release_date}</span></p>}
              {props.error && <p className="movie_error">{props.error}</p>}
            </div>
            );
        })}
        {/*{props.poster && <p className="movie_key"><img src={`http://image.tmdb.org/t/p/w185${props.poster}`} alt={`${props.title} poster`}/></p>}
        {props.title && <p className="movie_key">Title: <span className="movie_value">{props.title}</span></p>}
        {props.releaseDate && <p className="movie_key">Release Date: <span className="movie_value">{props.releaseDate}</span></p>}
        {props.description&& <p className="movie_key">Description: <span className="movie_value">{props.description}</span></p>}
        {props.error && <p className="movie_error">{props.error}</p>}
        */}
        </div>
    </div>
);
export default Movies
