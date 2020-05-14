'use strict';

import React from 'react';
import { shallow, render } from 'enzyme';


import FormGroup from '../FormGroup';
import ToggleSwitch from './ToggleSwitch';

it('renders the basic input', () => {
  const tree = render(
    <ToggleSwitch />
  );
  expect(tree).toMatchSnapshot();
});

it('renders the basic input with id', () => {
  const tree = render(
    <ToggleSwitch id="foo" />
  );
  expect(tree).toMatchSnapshot();
});

it('renders the basic input with idGuid', () => {
  const tree = render(
    <ToggleSwitch idGuid="bar" />
  );
  expect(tree).toMatchSnapshot();
});

it('will prefer id over idGuid', () => {
  const tree = render(
    <ToggleSwitch id="foo" idGuid="bar" />
  );
  expect(tree).toMatchSnapshot();
});

it('renders the basic input with required', () => {
  const tree = render(
    <ToggleSwitch required />
  );
  expect(tree).toMatchSnapshot();
});

it('renders the basic input with placeholder', () => {
  const tree = render(
    <ToggleSwitch placeholder="foo" />
  );
  expect(tree).toMatchSnapshot();
});

it('renders the basic input with aria-describedby', () => {
  const tree = render(
    <ToggleSwitch aria-describedby="foo" />
  );
  expect(tree).toMatchSnapshot();
});

it('renders as form group', () => {
  const tree = shallow(
    <FormGroup labelText="My label">
      <ToggleSwitch />
    </FormGroup>
  );
  expect(tree).toMatchSnapshot();
});

it('renders as form group, with helpText, using the aria-describedby attribute', () => {
  const tree = shallow(
    <FormGroup labelText="My label" helpText="foo">
      <ToggleSwitch />
    </FormGroup>
  );
  expect(tree).toMatchSnapshot();
});

it('renders as form group, with error, using the aria-describedby attribute', () => {
  const tree = shallow(
    <FormGroup labelText="My label" error="foo">
      <ToggleSwitch />
    </FormGroup>
  );
  expect(tree).toMatchSnapshot();
});

it('renders as form group, with helpText and error, using two aria-describedby attributes', () => {
  const tree = shallow(
    <FormGroup labelText="My label" helpText="foo" error="bar">
      <ToggleSwitch />
    </FormGroup>
  );
  expect(tree).toMatchSnapshot();
});