'use strict';

import React from 'react';
import { shallow, render } from 'enzyme';

import Label from './Label';

it('renders the base label', () => {
  const tree = render(
    <Label>foo</Label>
  );
  expect(tree).toMatchSnapshot();
});

it('renders the primary variation', () => {
  const tree = render(
    <Label primary>foo</Label>
  );
  expect(tree).toMatchSnapshot();
});

it('renders the info variation', () => {
  const tree = render(
    <Label info>foo</Label>
  );
  expect(tree).toMatchSnapshot();
});

it('renders the success variation', () => {
  const tree = render(
    <Label success>foo</Label>
  );
  expect(tree).toMatchSnapshot();
});

it('renders the warning variation', () => {
  const tree = render(
    <Label warning>foo</Label>
  );
  expect(tree).toMatchSnapshot();
});

it('renders the danger variation', () => {
  const tree = render(
    <Label danger>foo</Label>
  );
  expect(tree).toMatchSnapshot();
});

it('renders the inverse variation', () => {
  const tree = render(
    <Label inverse>foo</Label>
  );
  expect(tree).toMatchSnapshot();
});

it('renders the white variation', () => {
  const tree = render(
    <Label white>foo</Label>
  );
  expect(tree).toMatchSnapshot();
});

it('renders the large variation', () => {
  const tree = render(
    <Label large>foo</Label>
  );
  expect(tree).toMatchSnapshot();
});

it('renders multiple variations', () => {
  const tree = render(
    <Label primary large>foo</Label>
  );
  expect(tree).toMatchSnapshot();
});
