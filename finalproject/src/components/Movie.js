import React, { Component } from 'react';
import Form from './Form';

const API_KEY = '36341ad74dd05db38d810686efc2d20f';

class Movie extends Component {
    state = {
        activeMovie : []
    }
    componentDidMount = async () => {
        const TITLE = this.props.match.params.title
        const API_CALL_SIGNLE = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${TITLE}`);
        console.log(API_CALL_SIGNLE)
        const movieData = await API_CALL_SIGNLE.json();
        this.setState({
            activeMovie: movieData.results[0]
        });
    }
    
    render(){
        const movie = this.state.activeMovie;
        return(
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Movie Search</h1>
                    <Form/>
                </header>
            <div className="container">
                <div className="active-movie">
                    {movie.poster_path && <img className="acitve-moive__img" src={`http://image.tmdb.org/t/p/w185${movie.poster_path}`} alt={`${movie.title}`} />}
                    {movie.poster_path && movie.title && <h3 className="active-movie__title">{movie.title}</h3>}
                    {movie.poster_path && movie.release_date && <h4 className="active-movie__date">Release Date: {new Date(`${movie.release_date}`).toDateString()}</h4>}
                    {movie.poster_path && movie.overview && <p className="movie_key">Overview: <span className="active-movie__overview">{movie.overview}</span></p>}
                </div>
            </div>
            </div>
        )
    }
}
export default Movie