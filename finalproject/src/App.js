import React, { Component } from 'react';

import Form from './components/Form'  
import PopularMovies from './components/popularMovies';

class App extends Component {
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
