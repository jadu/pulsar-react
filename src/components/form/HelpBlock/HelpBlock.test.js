'use strict';

import React from 'react';
import { shallow, render } from 'enzyme';

import HelpBlock from './HelpBlock';

it('Is null if no Help is provided', () => {
  const tree = render(
    <HelpBlock></HelpBlock>
  );
  expect(tree).toMatchSnapshot();
});

it('Renders the help block when help is provided', () => {
  const tree = render(
    <HelpBlock>Foo</HelpBlock>
  );
  expect(tree).toMatchSnapshot();
});

it('Renders the help block with helpGuid as the ID', () => {
  const tree = render(
    <HelpBlock helpGuid="bar">Foo</HelpBlock>
  );
  expect(tree).toMatchSnapshot();
});


