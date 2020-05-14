'use strict';

import React from 'react';
import { shallow, render } from 'enzyme';


import FormGroup from '../FormGroup';
import InlineCheckbox from './InlineCheckbox';

it('renders the basic input', () => {
  const tree = render(
    <InlineCheckbox />
  );
  expect(tree).toMatchSnapshot();
});

it('renders the basic input with id', () => {
  const tree = render(
    <InlineCheckbox id="foo" />
  );
  expect(tree).toMatchSnapshot();
});

it('renders the basic input with idGuid', () => {
  const tree = render(
    <InlineCheckbox idGuid="bar" />
  );
  expect(tree).toMatchSnapshot();
});

it('will prefer id over idGuid', () => {
  const tree = render(
    <InlineCheckbox id="foo" idGuid="bar" />
  );
  expect(tree).toMatchSnapshot();
});

it('renders the basic input with required', () => {
  const tree = render(
    <InlineCheckbox required />
  );
  expect(tree).toMatchSnapshot();
});

it('renders the basic input with placeholder', () => {
  const tree = render(
    <InlineCheckbox placeholder="foo" />
  );
  expect(tree).toMatchSnapshot();
});

it('renders the basic input with aria-describedby', () => {
  const tree = render(
    <InlineCheckbox aria-describedby="foo" />
  );
  expect(tree).toMatchSnapshot();
});

it('renders as form group', () => {
  const tree = shallow(
    <FormGroup labelText="My label">
      <InlineCheckbox />
    </FormGroup>
  );
  expect(tree).toMatchSnapshot();
});

it('renders as form group, with helpText, using the aria-describedby attribute', () => {
  const tree = shallow(
    <FormGroup labelText="My label" helpText="foo">
      <InlineCheckbox />
    </FormGroup>
  );
  expect(tree).toMatchSnapshot();
});

it('renders as form group, with error, using the aria-describedby attribute', () => {
  const tree = shallow(
    <FormGroup labelText="My label" error="foo">
      <InlineCheckbox />
    </FormGroup>
  );
  expect(tree).toMatchSnapshot();
});

it('renders as form group, with helpText and error, using two aria-describedby attributes', () => {
  const tree = shallow(
    <FormGroup labelText="My label" helpText="foo" error="bar">
      <InlineCheckbox />
    </FormGroup>
  );
  expect(tree).toMatchSnapshot();
});