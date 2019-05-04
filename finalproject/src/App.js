import React, { Component } from 'react';
import Form from './components/Form'
//import Movies from './components/Movies'
import PopularMovies from './components/popularMovies';


/*
guides: https://www.youtube.com/watch?v=PbJt7-a2274,
        https://developers.themoviedb.org/3/getting-started/introduction


TODO: 1. Add single movie page
      2. Add popular movies page
      3. Add error for no entry in search bar
*/
//const API_KEY = '36341ad74dd05db38d810686efc2d20f';

class App extends Component {
  /*
  state = {
    movies: []
  }
  getMovies = async(e) => {
    e.preventDefault();
    const MOVIE_QUERY = e.target.elements.movie.value;
    const API_CALL = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${MOVIE_QUERY}`);
    const data = await API_CALL.json();
    this.setState({
        movies : data.results
    })
  }
  /*componentDidMount = () => {
    const json = localStorage.getItem("movies");
    const movies = JSON.parse(json);
    this.setState({ movies });
  }
  
  componentDidUpdate = () => {
    const movies = JSON.stringify(this.state.movies);
    localStorage.setItem("movies", movies);
  }
  */
  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Movie Search</h1>
          <Form/>
        </header>
        <PopularMovies/>
      </div>
    );
  }
}

export default App;
