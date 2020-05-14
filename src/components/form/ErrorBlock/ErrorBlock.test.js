'use strict';

import React from 'react';
import { shallow, render } from 'enzyme';

import ErrorBlock from './ErrorBlock';

it('Is null if no error is provided', () => {
  const tree = render(
    <ErrorBlock></ErrorBlock>
  );
  expect(tree).toMatchSnapshot();
});

it('Renders the help block when an error is provided', () => {
  const tree = render(
    <ErrorBlock>Foo</ErrorBlock>
  );
  expect(tree).toMatchSnapshot();
});

it('Renders the help block with errorGuid as the ID', () => {
  const tree = render(
    <ErrorBlock errorGuid="bar">Foo</ErrorBlock>
  );
  expect(tree).toMatchSnapshot();
});


