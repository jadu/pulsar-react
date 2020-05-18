'use strict';

import React from 'react';
import { shallow, render } from 'enzyme';

import Badge from './Badge';

it('renders the base badge', () => {
  const tree = render(
    <Badge>foo</Badge>
  );
  expect(tree).toMatchSnapshot();
});

it('renders the primary variation', () => {
  const tree = render(
    <Badge primary>foo</Badge>
  );
  expect(tree).toMatchSnapshot();
});

it('renders the info variation', () => {
  const tree = render(
    <Badge info>foo</Badge>
  );
  expect(tree).toMatchSnapshot();
});

it('renders the success variation', () => {
  const tree = render(
    <Badge success>foo</Badge>
  );
  expect(tree).toMatchSnapshot();
});

it('renders the warning variation', () => {
  const tree = render(
    <Badge warning>foo</Badge>
  );
  expect(tree).toMatchSnapshot();
});

it('renders the danger variation', () => {
  const tree = render(
    <Badge danger>foo</Badge>
  );
  expect(tree).toMatchSnapshot();
});

it('renders the inverse variation', () => {
  const tree = render(
    <Badge inverse>foo</Badge>
  );
  expect(tree).toMatchSnapshot();
});

it('renders the white variation', () => {
  const tree = render(
    <Badge white>foo</Badge>
  );
  expect(tree).toMatchSnapshot();
});

it('renders the outline variation', () => {
  const tree = render(
    <Badge outline>foo</Badge>
  );
  expect(tree).toMatchSnapshot();
});

it('renders the naked variation', () => {
  const tree = render(
    <Badge naked>foo</Badge>
  );
  expect(tree).toMatchSnapshot();
});

it('renders the small variation', () => {
  const tree = render(
    <Badge small>foo</Badge>
  );
  expect(tree).toMatchSnapshot();
});

it('renders multiple variations', () => {
  const tree = render(
    <Badge primary outline small>foo</Badge>
  );
  expect(tree).toMatchSnapshot();
});

it('renders as a link if the href attribute is supplied', () => {
  const tree = render(
    <Badge href="#bar">foo</Badge>
  );
  expect(tree).toMatchSnapshot();
});