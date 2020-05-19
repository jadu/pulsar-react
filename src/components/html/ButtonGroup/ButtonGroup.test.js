'use strict';

import React from 'react';
import { render } from 'enzyme';

import ButtonGroup from './ButtonGroup';

it('renders the button group', () => {
  const tree = render(
    <ButtonGroup>foo</ButtonGroup>
  );
  expect(tree).toMatchSnapshot();
});
