import React, { Component } from 'react';
import { Link } from "react-router-dom";
const API_KEY = '36341ad74dd05db38d810686efc2d20f';

class PopularMovies extends Component {
    state = {
        popularMovies : []
    }
    componentDidMount = async () => {
        const CALL_POPULAR = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`);
        const moviesData = await CALL_POPULAR.json();
        this.setState({
            popularMovies: moviesData.results
        });
    }
    render(){
        const movies = this.state.popularMovies;
        return(
            <div className="container">
                <div className="row">
                {movies.map((movie) => {
                return (
                    <div key={movie.id} className="col-md-4" style={{marginBottom:"2rem"}}>
                        <div className="movie__box">
                            {movie.poster_path && <img className="movie__box=img" src={`http://image.tmdb.org/t/p/w185${movie.poster_path}`} alt={`${movie.title}`} />}
                            <div className="movie__text">
                                {movie.poster_path && movie.title &&<h5 className="movie__title">{movie.title}</h5>}
                                {movie.poster_path && movie.release_date && <p className="movie__releaseDate">Release Date: <span>{new Date(`${movie.release_date}`).toDateString()}</span></p>}
                            </div>
                            <button className="movie__buttons">
                                <Link to={{pathname: `/movie/${movie.title}`}}>View Movie</Link>
                            </button>
                        </div>
                    </div>
                );
                })}
                </div>
            </div>
        )
    }
}
export default PopularMovies