'use strict';

import React from 'react';
import { shallow, render } from 'enzyme';


import FormGroup from '../FormGroup/FormGroup';
import TextArea from './TextArea';

it('renders the basic input', () => {
  const tree = render(
    <TextArea></TextArea>
  );
  expect(tree).toMatchSnapshot();
});

it('renders the basic input with id', () => {
  const tree = render(
    <TextArea id="foo"></TextArea>
  );
  expect(tree).toMatchSnapshot();
});

it('renders the basic input with idGuid', () => {
  const tree = render(
    <TextArea idGuid="bar"></TextArea>
  );
  expect(tree).toMatchSnapshot();
});

it('will prefer id over idGuid', () => {
  const tree = render(
    <TextArea id="foo" idGuid="bar"></TextArea>
  );
  expect(tree).toMatchSnapshot();
});

it('renders the basic input with required', () => {
  const tree = render(
    <TextArea required></TextArea>
  );
  expect(tree).toMatchSnapshot();
});

it('renders the basic input with placeholder', () => {
  const tree = render(
    <TextArea placeholder="foo"></TextArea>
  );
  expect(tree).toMatchSnapshot();
});

it('renders the basic input with aria-describedby', () => {
  const tree = render(
    <TextArea aria-describedby="foo"></TextArea>
  );
  expect(tree).toMatchSnapshot();
});

it('allows rows to be defined', () => {
  const tree = render(
    <TextArea rows={10}></TextArea>
  );
  expect(tree).toMatchSnapshot();
});

it('converts the width param to the grid classes', () => {
  const tree = render(
    <TextArea width={3}></TextArea>
  );
  expect(tree).toMatchSnapshot();
});

it('renders as form group', () => {
  const tree = shallow(
    <FormGroup labelText="My label">
      <TextArea></TextArea>
    </FormGroup>
  );
  expect(tree).toMatchSnapshot();
});

it('renders as form group, with helpText, using the aria-describedby attribute', () => {
  const tree = shallow(
    <FormGroup labelText="My label" helpText="foo">
      <TextArea></TextArea>
    </FormGroup>
  );
  expect(tree).toMatchSnapshot();
});

it('renders as form group, with error, using the aria-describedby attribute', () => {
  const tree = shallow(
    <FormGroup labelText="My label" error="foo">
      <TextArea></TextArea>
    </FormGroup>
  );
  expect(tree).toMatchSnapshot();
});

it('renders as form group, with helpText and error, using two aria-describedby attributes', () => {
  const tree = shallow(
    <FormGroup labelText="My label" helpText="foo" error="bar">
      <TextArea></TextArea>
    </FormGroup>
  );
  expect(tree).toMatchSnapshot();
});