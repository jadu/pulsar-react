'use strict';

import React from 'react';
import { shallow, render } from 'enzyme';


import FormGroup from '../FormGroup';
import ColorInput from './ColorInput';

it('renders the basic input', () => {
  const tree = render(
    <ColorInput />
  );
  expect(tree).toMatchSnapshot();
});

it('renders the basic input with id', () => {
  const tree = render(
    <ColorInput id="foo" />
  );
  expect(tree).toMatchSnapshot();
});

it('renders the basic input with idGuid', () => {
  const tree = render(
    <ColorInput idGuid="bar" />
  );
  expect(tree).toMatchSnapshot();
});

it('will prefer id over idGuid', () => {
  const tree = render(
    <ColorInput id="foo" idGuid="bar" />
  );
  expect(tree).toMatchSnapshot();
});

it('renders the basic input with required', () => {
  const tree = render(
    <ColorInput required />
  );
  expect(tree).toMatchSnapshot();
});

it('renders the basic input with placeholder', () => {
  const tree = render(
    <ColorInput placeholder="foo" />
  );
  expect(tree).toMatchSnapshot();
});

it('renders the basic input with aria-describedby', () => {
  const tree = render(
    <ColorInput aria-describedby="foo" />
  );
  expect(tree).toMatchSnapshot();
});

it('renders as form group', () => {
  const tree = shallow(
    <FormGroup labelText="My label">
      <ColorInput />
    </FormGroup>
  );
  expect(tree).toMatchSnapshot();
});

it('renders as form group, with helpText, using the aria-describedby attribute', () => {
  const tree = shallow(
    <FormGroup labelText="My label" helpText="foo">
      <ColorInput />
    </FormGroup>
  );
  expect(tree).toMatchSnapshot();
});

it('renders as form group, with error, using the aria-describedby attribute', () => {
  const tree = shallow(
    <FormGroup labelText="My label" error="foo">
      <ColorInput />
    </FormGroup>
  );
  expect(tree).toMatchSnapshot();
});

it('renders as form group, with helpText and error, using two aria-describedby attributes', () => {
  const tree = shallow(
    <FormGroup labelText="My label" helpText="foo" error="bar">
      <ColorInput />
    </FormGroup>
  );
  expect(tree).toMatchSnapshot();
});