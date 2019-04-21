import React, { Component } from 'react';
import Form from './components/Form'
import Movies from './components/movies'


const API_KEY = '36341ad74dd05db38d810686efc2d20f';

/*
const popularMovies = 'https://api.themoviedb.org/3/discover/movie?api_key=36341ad74dd05db38d810686efc2d20f&sort_by=popularity.desc';
const Batman = 'https://api.themoviedb.org/3/search/movie?api_key=36341ad74dd05db38d810686efc2d20f&query=Batman'
*/

class App extends Component {
  state = {
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
    console.log(data)
    this.setState({
      title: data.results[0].title,
      releaseDate: data.results[0].release_date,
      description: data.results[0].overview

    })
    

  }
  render() {
    return (
      <div className="App">
        <Form getData={this.getData}/>
        <Movies
          title={this.state.title}
          releaseDate={this.state.releaseDate}
          description={this.state.description}
        />
      </div>
    );
  }
}

export default App;
