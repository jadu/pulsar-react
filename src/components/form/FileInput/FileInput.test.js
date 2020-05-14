'use strict';

import React from 'react';
import { shallow, render } from 'enzyme';


import FormGroup from '../FormGroup';
import FileInput from './FileInput';

it('renders the basic input', () => {
  const tree = render(
    <FileInput />
  );
  expect(tree).toMatchSnapshot();
});

it('renders the basic input with id', () => {
  const tree = render(
    <FileInput id="foo" />
  );
  expect(tree).toMatchSnapshot();
});

it('renders the basic input with idGuid', () => {
  const tree = render(
    <FileInput idGuid="bar" />
  );
  expect(tree).toMatchSnapshot();
});

it('will prefer id over idGuid', () => {
  const tree = render(
    <FileInput id="foo" idGuid="bar" />
  );
  expect(tree).toMatchSnapshot();
});

it('renders the basic input with required', () => {
  const tree = render(
    <FileInput required />
  );
  expect(tree).toMatchSnapshot();
});

it('renders the basic input with placeholder', () => {
  const tree = render(
    <FileInput placeholder="foo" />
  );
  expect(tree).toMatchSnapshot();
});

it('renders the basic input with aria-describedby', () => {
  const tree = render(
    <FileInput aria-describedby="foo" />
  );
  expect(tree).toMatchSnapshot();
});

it('renders as form group', () => {
  const tree = shallow(
    <FormGroup labelText="My label">
      <FileInput />
    </FormGroup>
  );
  expect(tree).toMatchSnapshot();
});

it('renders as form group, with helpText, using the aria-describedby attribute', () => {
  const tree = shallow(
    <FormGroup labelText="My label" helpText="foo">
      <FileInput />
    </FormGroup>
  );
  expect(tree).toMatchSnapshot();
});

it('renders as form group, with error, using the aria-describedby attribute', () => {
  const tree = shallow(
    <FormGroup labelText="My label" error="foo">
      <FileInput />
    </FormGroup>
  );
  expect(tree).toMatchSnapshot();
});

it('renders as form group, with helpText and error, using two aria-describedby attributes', () => {
  const tree = shallow(
    <FormGroup labelText="My label" helpText="foo" error="bar">
      <FileInput />
    </FormGroup>
  );
  expect(tree).toMatchSnapshot();
});