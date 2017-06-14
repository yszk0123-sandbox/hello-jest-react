import React from 'react';
import { shallow } from 'enzyme';
import Hello from '../Hello';

test('renders "Hello, world!"', () => {
  const hello = shallow(<Hello />);

  expect(hello.text()).toBe('Hello, world!');
});
