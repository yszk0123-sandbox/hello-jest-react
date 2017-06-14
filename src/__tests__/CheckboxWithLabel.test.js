import React from 'react';
import { shallow } from 'enzyme';
import CheckboxWithLabel from '../CheckboxWithLabel';

test('changes the text after click', () => {
  const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off" />);

  expect(checkbox.text()).toBe('Off');

  checkbox.find('input').simulate('change');

  expect(checkbox.text()).toBe('On');
});
