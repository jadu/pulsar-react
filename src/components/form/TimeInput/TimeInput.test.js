'use strict';

import React from 'react';
import { shallow, render } from 'enzyme';


import FormGroup from '../FormGroup';
import TimeInput from './TimeInput';

it('renders the basic input', () => {
  const tree = render(
    <TimeInput />
  );
  expect(tree).toMatchSnapshot();
});

it('renders the basic input with id', () => {
  const tree = render(
    <TimeInput id="foo" />
  );
  expect(tree).toMatchSnapshot();
});

it('renders the basic input with idGuid', () => {
  const tree = render(
    <TimeInput idGuid="bar" />
  );
  expect(tree).toMatchSnapshot();
});

it('will prefer id over idGuid', () => {
  const tree = render(
    <TimeInput id="foo" idGuid="bar" />
  );
  expect(tree).toMatchSnapshot();
});

it('renders the basic input with required', () => {
  const tree = render(
    <TimeInput required />
  );
  expect(tree).toMatchSnapshot();
});

it('renders the basic input with placeholder', () => {
  const tree = render(
    <TimeInput placeholder="foo" />
  );
  expect(tree).toMatchSnapshot();
});

it('renders the basic input with aria-describedby', () => {
  const tree = render(
    <TimeInput aria-describedby="foo" />
  );
  expect(tree).toMatchSnapshot();
});

it('renders as form group', () => {
  const tree = shallow(
    <FormGroup labelText="My label">
      <TimeInput />
    </FormGroup>
  );
  expect(tree).toMatchSnapshot();
});

it('renders as form group, with helpText, using the aria-describedby attribute', () => {
  const tree = shallow(
    <FormGroup labelText="My label" helpText="foo">
      <TimeInput />
    </FormGroup>
  );
  expect(tree).toMatchSnapshot();
});

it('renders as form group, with error, using the aria-describedby attribute', () => {
  const tree = shallow(
    <FormGroup labelText="My label" error="foo">
      <TimeInput />
    </FormGroup>
  );
  expect(tree).toMatchSnapshot();
});

it('renders as form group, with helpText and error, using two aria-describedby attributes', () => {
  const tree = shallow(
    <FormGroup labelText="My label" helpText="foo" error="bar">
      <TimeInput />
    </FormGroup>
  );
  expect(tree).toMatchSnapshot();
});