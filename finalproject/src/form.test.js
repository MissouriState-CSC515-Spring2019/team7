import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Form from './components/Form';

describe('Form', () => {
    test("renders", () => {
        const wrapper = shallow(<Form />);
        expect(wrapper.exists()).toBe(true);
    });

});   
