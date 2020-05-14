'use strict';

import React from 'react';
import { shallow, render } from 'enzyme';


import FormGroup from '../FormGroup/FormGroup';
import ChoiceGroupItem from './ChoiceGroupItem';

it('renders the basic input, defaulting to radio', () => {
  const tree = render(
    <ChoiceGroupItem />
  );
  expect(tree).toMatchSnapshot();
});

it('renders the basic input, as checkbox', () => {
  const tree = render(
    <ChoiceGroupItem type="checkbox" />
  );
  expect(tree).toMatchSnapshot();
});

it('renders the basic input with labelText', () => {
  const tree = render(
    <ChoiceGroupItem>My Label</ChoiceGroupItem>
  );
  expect(tree).toMatchSnapshot();
});

it('renders the basic input with name', () => {
  const tree = render(
    <ChoiceGroupItem name="foo">My Label</ChoiceGroupItem>
  );
  expect(tree).toMatchSnapshot();
});

it('renders the basic input with id', () => {
  const tree = render(
    <ChoiceGroupItem id="foo">My Label</ChoiceGroupItem>
  );
  expect(tree).toMatchSnapshot();
});

it('renders the basic input with idGuid', () => {
  const tree = render(
    <ChoiceGroupItem idGuid="bar">My Label</ChoiceGroupItem>
  );
  expect(tree).toMatchSnapshot();
});

it('will prefer id over idGuid', () => {
  const tree = render(
    <ChoiceGroupItem id="foo" idGuid="bar">My Label</ChoiceGroupItem>
  );
  expect(tree).toMatchSnapshot();
});

it('renders the basic input with aria-describedby', () => {
  const tree = render(
    <ChoiceGroupItem aria-describedby="foo">My Label</ChoiceGroupItem>
  );
  expect(tree).toMatchSnapshot();
});

it('renders as form group', () => {
  const tree = shallow(
    <FormGroup buttonGroup labelText="My Label">
      <ChoiceGroupItem id="foo-1" name="group-1">Foo</ChoiceGroupItem>
      <ChoiceGroupItem id="bar-1" name="group-1">Bar</ChoiceGroupItem>
    </FormGroup>
  );
  expect(tree).toMatchSnapshot();
});

it('renders as form group, with helpText, using the aria-describedby attribute', () => {
  const tree = shallow(
    <FormGroup buttonGroup labelText="My Label" helpText="foo">
      <ChoiceGroupItem name="group-1">Foo</ChoiceGroupItem>
    </FormGroup>
  );
  expect(tree).toMatchSnapshot();
});

it('renders as form group, with error, using the aria-describedby attribute', () => {
  const tree = shallow(
    <FormGroup buttonGroup labelText="My Label" error="bar">
      <ChoiceGroupItem id="foo-1" name="group-1">Foo</ChoiceGroupItem>
      <ChoiceGroupItem id="bar-1" name="group-1">Bar</ChoiceGroupItem>
    </FormGroup>
  );
  expect(tree).toMatchSnapshot();
});

it('renders as form group, with helpText and error, using two aria-describedby attributes', () => {
  const tree = shallow(
    <FormGroup buttonGroup labelText="My Label" helpText="foo" error="bar">
      <ChoiceGroupItem id="foo-1" name="group-1">Foo</ChoiceGroupItem>
      <ChoiceGroupItem id="bar-1" name="group-1">Bar</ChoiceGroupItem>
    </FormGroup>
  );
  expect(tree).toMatchSnapshot();
});