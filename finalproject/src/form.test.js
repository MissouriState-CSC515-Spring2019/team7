import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Form from './components/Form';

describe('Form', () => {
    test("renders", () => {
        const wrapper = shallow(<Form />);
        expect(wrapper.exists()).toBe(true);
    });

    test('user input', () => {
        const wrapper = shallow(<Form onSubmit={() => {}} />);
        wrapper.find("input").simulate("change", {
            target: {title: "Movie Name"}
        });
        expect(wrapper.find('input').props().title).toEqual("Movie Name");
    })

    test("event is cancelled when form submitted", () => {
        const wrapper = shallow(<Form />);
        let prevent = false;
        wrapper.find("form").simulate("submit", {
            preventDefault: () => {
                prevent = true;
            }
        });
        expect(prevent).toBe(true);
    });
});   
