'use strict';

import React from 'react';
import { render } from 'enzyme';

import OrderedList from './OrderedList';

it('renders the base elements', () => {
  const tree = render(
    <OrderedList>foo</OrderedList>
  );
  expect(tree).toMatchSnapshot();
});