import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Form from './Form';

const API_KEY = '36341ad74dd05db38d810686efc2d20f';

class Movies extends Component {
    state = {
        movies: []
    }
    APICALL = async () => {
        const MOVIE_QUERY = this.props.match.params.title
        const API_CALL = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${MOVIE_QUERY}`);
        const data = await API_CALL.json();
        this.setState({
            movies : data.results
        })
    }
    componentDidMount = async () => {
        this.APICALL();
    }
    componentDidUpdate = async () => {
        this.APICALL();
    }
    render(){
    const movies = this.state.movies;   
        return(
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Movie Search</h1>
                    <Form/>
                </header>
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
                               {movie.poster_path &&<Link to={{pathname: `/movie/${movie.title}`}}>View Movie</Link>}
                            </button>
                        </div>
                    </div>
                );
                })}
                </div>
            </div>
            </div>
        )
    }
}
export default Movies
