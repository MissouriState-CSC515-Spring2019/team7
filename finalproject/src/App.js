import React, { Component } from 'react';
import Form from './components/Form'
import Movies from './components/Movies'


const API_KEY = '36341ad74dd05db38d810686efc2d20f';

/*
const popularMovies = 'https://api.themoviedb.org/3/discover/movie?api_key=36341ad74dd05db38d810686efc2d20f&sort_by=popularity.desc';
const Batman = 'https://api.themoviedb.org/3/search/movie?api_key=36341ad74dd05db38d810686efc2d20f&query=Batman'
*/

class App extends Component {
  state = {
    poster: undefined,
    title : undefined,
    releaseDate: undefined,
    description: undefined,
    error: undefined
  }

  getData = async(e) => {
    e.preventDefault();
    const MOVIE_QUERY = e.target.elements.movie.value;
    const API_CALL = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${MOVIE_QUERY}`);
    const data = await API_CALL.json();
    if(MOVIE_QUERY) {
      this.setState({
        poster: data.results[0].poster_path,
        title: data.results[0].title,
        releaseDate: data.results[0].release_date,
        description: data.results[0].overview,
        error:''
      })
    } else {
      this.setState({
        poster: undefined,
        title: undefined,
        releaseDate: undefined,
        description: undefined,
        error: "Please enter a movie."
      })
    }
  }
  render() {
    return (
      <div className="App">
        <Form getData={this.getData}/>
        <Movies
          poster={this.state.poster}
          title={this.state.title}
          releaseDate={this.state.releaseDate}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
