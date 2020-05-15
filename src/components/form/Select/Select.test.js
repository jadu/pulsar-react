'use strict';

import React from 'react';
import { shallow, render } from 'enzyme';

import FormGroup from '../FormGroup/FormGroup';
import Select from './Select';

const selectOptions = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

it('renders the basic input', () => {
  const tree = render(
    <Select options={selectOptions} />
  );
  expect(tree).toMatchSnapshot();
});

it('renders the basic input with id', () => {
  const tree = render(
    <Select options={selectOptions} id="foo" />
  );
  expect(tree).toMatchSnapshot();
});

it('renders the basic input with idGuid', () => {
  const tree = render(
    <Select options={selectOptions} idGuid="bar" />
  );
  expect(tree).toMatchSnapshot();
});

it('will prefer id over idGuid', () => {
  const tree = render(
    <Select options={selectOptions} id="foo" idGuid="bar" />
  );
  expect(tree).toMatchSnapshot();
});

it('renders the basic input with required', () => {
  const tree = render(
    <Select options={selectOptions} required />
  );
  expect(tree).toMatchSnapshot();
});

it('renders the basic input with placeholder', () => {
  const tree = render(
    <Select options={selectOptions} placeholder="foo" />
  );
  expect(tree).toMatchSnapshot();
});

it('renders the basic input with aria-describedby', () => {
  const tree = render(
    <Select options={selectOptions} aria-describedby="foo" />
  );
  expect(tree).toMatchSnapshot();
});

it('converts the width param to the grid classes when no options provided', () => {
  const tree = render(
    <Select width={2} />
  );
  expect(tree).toMatchSnapshot();
});

it('converts the width param to the grid classes', () => {
  const tree = render(
    <Select options={selectOptions} width={3} />
  );
  expect(tree).toMatchSnapshot();
});


it('renders as form group', () => {
  const tree = shallow(
    <FormGroup labelText="My label">
      <Select options={selectOptions} />
    </FormGroup>
  );
  expect(tree).toMatchSnapshot();
});

it('renders as form group, with helpText, using the aria-describedby attribute', () => {
  const tree = shallow(
    <FormGroup labelText="My label" helpText="foo">
      <Select options={selectOptions} />
    </FormGroup>
  );
  expect(tree).toMatchSnapshot();
});

it('renders as form group, with error, using the aria-describedby attribute', () => {
  const tree = shallow(
    <FormGroup labelText="My label" error="foo">
      <Select options={selectOptions} />
    </FormGroup>
  );
  expect(tree).toMatchSnapshot();
});

it('renders as form group, with helpText and error, using two aria-describedby attributes', () => {
  const tree = shallow(
    <FormGroup labelText="My label" helpText="foo" error="bar">
      <Select options={selectOptions} />
    </FormGroup>
  );
  expect(tree).toMatchSnapshot();
}); 