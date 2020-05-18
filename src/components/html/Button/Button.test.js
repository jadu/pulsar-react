'use strict';

import React from 'react';
import { shallow, render } from 'enzyme';

import Button from './Button';

it('renders the base button', () => {
  const tree = render(
    <Button>foo</Button>
  );
  expect(tree).toMatchSnapshot();
});

it('renders the primary variation', () => {
  const tree = render(
    <Button primary>foo</Button>
  );
  expect(tree).toMatchSnapshot();
});

it('renders the success variation', () => {
  const tree = render(
    <Button success>foo</Button>
  );
  expect(tree).toMatchSnapshot();
});

it('renders the warning variation', () => {
  const tree = render(
    <Button warning>foo</Button>
  );
  expect(tree).toMatchSnapshot();
});

it('renders the danger variation', () => {
  const tree = render(
    <Button danger>foo</Button>
  );
  expect(tree).toMatchSnapshot();
});

it('renders the inverse variation', () => {
  const tree = render(
    <Button inverse>foo</Button>
  );
  expect(tree).toMatchSnapshot();
});

it('renders the outline variation', () => {
  const tree = render(
    <Button outline>foo</Button>
  );
  expect(tree).toMatchSnapshot();
});

it('renders the naked variation', () => {
  const tree = render(
    <Button naked>foo</Button>
  );
  expect(tree).toMatchSnapshot();
});

it('renders the small variation', () => {
  const tree = render(
    <Button small>foo</Button>
  );
  expect(tree).toMatchSnapshot();
});

it('renders multiple variations', () => {
  const tree = render(
    <Button primary outline small>foo</Button>
  );
  expect(tree).toMatchSnapshot();
});

it('renders as a link if the href attribute is supplied', () => {
  const tree = render(
    <Button href="#bar">foo</Button>
  );
  expect(tree).toMatchSnapshot();
});