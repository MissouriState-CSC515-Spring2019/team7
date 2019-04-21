import React from 'react';

const Movies = props => (
    <div className="movieData">
    {props.poster && <p className="movie_key"><img src={`http://image.tmdb.org/t/p/w185${props.poster}`} alt={`${props.title} poster`}/></p>}
    {props.title && <p className="movie_key">Title: <span className="movie_value">{props.title}</span></p>}
    {props.releaseDate && <p className="movie_key">Release Date: <span className="movie_value">{props.releaseDate}</span></p>}
    {props.description&& <p className="movie_key">Description: <span className="movie_value">{props.description}</span></p>}
    {props.error && <p className="movie_error">{props.error}</p>}
    </div>
)
export default Movies
