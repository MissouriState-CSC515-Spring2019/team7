import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Movie from './components/Movie';

describe('Movie', () => {
  it('should render correctly', () => {
    const output = shallow(
      <Movie title="Iron Man" url="Iron Man" />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});