'use strict';

import React from 'react';
import { shallow, mount } from 'enzyme';


import FormGroup from '../FormGroup';
import TextInput from './TextInput';

it('renders a form group with text input', () => {
  const tree = shallow(
    <FormGroup labelText="Basic">
      <TextInput placeholder="foo" />
    </FormGroup>
  );
  expect(tree).toMatchSnapshot();
});

it('renders the basic input', () => {
  const tree = shallow(
    <TextInput />
  );
  expect(tree).toMatchSnapshot();
});

it('renders the basic input with id', () => {
  const tree = shallow(
    <TextInput id="foo" />
  );
  expect(tree).toMatchSnapshot();
});

it('renders the basic input with required', () => {
  const tree = shallow(
    <TextInput required />
  );
  expect(tree).toMatchSnapshot();
});

it('renders the basic input with placeholder', () => {
  const tree = shallow(
    <TextInput placeholder="foo" />
  );
  expect(tree).toMatchSnapshot();
});




