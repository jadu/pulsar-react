'use strict';

import React from 'react';
import { shallow, render } from 'enzyme';


import FormGroup from '../FormGroup/FormGroup';
import Content from './Content';

it('renders the basic input', () => {
  const tree = render(
    <Content>foo</Content>
  );
  expect(tree).toMatchSnapshot();
});