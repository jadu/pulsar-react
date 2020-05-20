'use strict';

import React from 'react';
import { render } from 'enzyme';

import UnorderedList from './UnorderedList';

it('renders the base elements', () => {
  const tree = render(
    <UnorderedList>foo</UnorderedList>
  );
  expect(tree).toMatchSnapshot();
});