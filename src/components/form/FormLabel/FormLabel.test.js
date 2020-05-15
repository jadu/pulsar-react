'use strict';

import React from 'react';
import { shallow, render } from 'enzyme';

import FormLabel from './FormLabel';

it('should render an empty span if no label is provided', () => {
  const tree = render(
    <FormLabel></FormLabel>
  );
  expect(tree).toMatchSnapshot();
});

it('should render the basic label', () => {
  const tree = render(
    <FormLabel>foo</FormLabel>
  );
  expect(tree).toMatchSnapshot();
});

it('should allow the label to be hidden', () => {
  const tree = render(
    <FormLabel hideLabel="true">foo</FormLabel>
  );
  expect(tree).toMatchSnapshot();
});

it('should add the required indicator', () => {
  const tree = render(
    <FormLabel required="true">foo</FormLabel>
  );
  expect(tree).toMatchSnapshot();
});

it('should allow htmlFor attribute', () => {
  const tree = render(
    <FormLabel htmlFor="bar">foo</FormLabel>
  );
  expect(tree).toMatchSnapshot();
});

it('should allow idGuid to be used as htmlFor attribute', () => {
  const tree = render(
    <FormLabel idGuid="baz">foo</FormLabel>
  );
  expect(tree).toMatchSnapshot();
});

it('should prefer htmlFor over idGuid attribute', () => {
  const tree = render(
    <FormLabel htmlFor="bar" idGuid="baz">foo</FormLabel>
  );
  expect(tree).toMatchSnapshot();
});

it('can use a span instead of a label tag', () => {
  const tree = render(
    <FormLabel tag="span">foo</FormLabel>
  );
  expect(tree).toMatchSnapshot();
});