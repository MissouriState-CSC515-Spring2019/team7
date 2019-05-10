import React from 'react';
import ReactDOM from 'react-dom';
import PopularMovies from './components/popularMovies';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PopularMovies />, div);
  ReactDOM.unmountComponentAtNode(div);
});
