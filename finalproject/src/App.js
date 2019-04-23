import React, { Component } from 'react';
import Form from './components/Form'
import Movies from './components/Movies'

/*
guides: https://www.youtube.com/watch?v=PbJt7-a2274,
        https://developers.themoviedb.org/3/getting-started/introduction


TODO: 1. Add single movie page
      2. Add popular movies page
      3. Add error for no entry in search bar
*/
const API_KEY = '36341ad74dd05db38d810686efc2d20f';

class App extends Component {
  state = {
    movies: [],
    error: undefined
  }
  /*
  getPopular = async(e) => {
    e.preventDefault();
    const API_CALL = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=36341ad74dd05db38d810686efc2d20f&sort_by=popularity.desc');
    const data = await API_CALL.json();
    this.setState({ movies: data.results})
     
  }
  */

  getMovie = async(e) => {
    e.preventDefault();
    const MOVIE_QUERY = e.target.elements.movie.value;
    const API_CALL = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${MOVIE_QUERY}`);
    const data = await API_CALL.json();
    if(MOVIE_QUERY) {
      this.setState({
        movies : data.results,
        error:''
      })
    } /*
    else {
      this.setState({
        movies : undefined,
        error: "Please enter a movie."
      })
    }
    */
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Movie Search</h1>
        </header>
        <Form getMovie={this.getMovie}/>
        <Movies movies={this.state.movies} error={this.state.error}/>
      </div>
    );
  }
}

export default App;
