'use strict';

import React from 'react';
import { render } from 'enzyme';

import HiddenInput from '../HiddenInput/HiddenInput';

it('renders the basic input', () => {
  const tree = render(
    <HiddenInput />
  );
  expect(tree).toMatchSnapshot();
});

it('renders the basic input with id', () => {
  const tree = render(
    <HiddenInput id="foo" />
  );
  expect(tree).toMatchSnapshot();
});

it('renders the basic input with idGuid', () => {
  const tree = render(
    <HiddenInput idGuid="bar" />
  );
  expect(tree).toMatchSnapshot();
});

it('will prefer id over idGuid', () => {
  const tree = render(
    <HiddenInput id="foo" idGuid="bar" />
  );
  expect(tree).toMatchSnapshot();
});
