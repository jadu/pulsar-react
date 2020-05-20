'use strict';

import React from 'react';
import { render } from 'enzyme';

import ListItem from './ListItem';

it('renders the base elements', () => {
  const tree = render(
    <ListItem>foo</ListItem>
  );
  expect(tree).toMatchSnapshot();
});