'use strict';

import React from 'react';
import { render } from 'enzyme';

import Form from './Form';

it('Renders the form wrapper', () => {
  const tree = render(
    <Form>foo</Form>
  );
  expect(tree).toMatchSnapshot();
});

it('allows the PUT method', () => {
  const tree = render(
    <Form method="PUT">foo</Form>
  );
  expect(tree).toMatchSnapshot();
});

it('Allows a nonce to be supplied', () => {
  const tree = render(
    <Form nonce="baz">foo</Form>
  );
  expect(tree).toMatchSnapshot();
});
