'use strict';

import React from 'react';
import { shallow, render } from 'enzyme';


import FormGroup from '../FormGroup';
import ButtonGroupItem from './ButtonGroupItem';

it('renders the basic input, defaulting to radio', () => {
  const tree = render(
    <ButtonGroupItem />
  );
  expect(tree).toMatchSnapshot();
});

it('renders the basic input, as checkbox', () => {
  const tree = render(
    <ButtonGroupItem type="checkbox" />
  );
  expect(tree).toMatchSnapshot();
});

it('renders the basic input with labelText', () => {
  const tree = render(
    <ButtonGroupItem>My Label</ButtonGroupItem>
  );
  expect(tree).toMatchSnapshot();
});

it('renders the basic input with name', () => {
  const tree = render(
    <ButtonGroupItem name="foo">My Label</ButtonGroupItem>
  );
  expect(tree).toMatchSnapshot();
});

it('renders the basic input with id', () => {
  const tree = render(
    <ButtonGroupItem id="foo">My Label</ButtonGroupItem>
  );
  expect(tree).toMatchSnapshot();
});

it('renders the basic input with idGuid', () => {
  const tree = render(
    <ButtonGroupItem idGuid="bar">My Label</ButtonGroupItem>
  );
  expect(tree).toMatchSnapshot();
});

it('will prefer id over idGuid', () => {
  const tree = render(
    <ButtonGroupItem id="foo" idGuid="bar">My Label</ButtonGroupItem>
  );
  expect(tree).toMatchSnapshot();
});

it('renders the basic input with aria-describedby', () => {
  const tree = render(
    <ButtonGroupItem aria-describedby="foo">My Label</ButtonGroupItem>
  );
  expect(tree).toMatchSnapshot();
});

it('renders as form group', () => {
  const tree = shallow(
    <FormGroup buttonGroup labelText="My Label">
      <>
        <ButtonGroupItem id="foo-1" name="group-1">Foo</ButtonGroupItem>
        <ButtonGroupItem id="bar-1" name="group-1">Bar</ButtonGroupItem>
      </>
    </FormGroup>
  );
  expect(tree).toMatchSnapshot();
});

it('renders as form group, with helpText, using the aria-describedby attribute', () => {
  const tree = shallow(
    <FormGroup buttonGroup labelText="My Label" helpText="foo">
      <>
        <ButtonGroupItem name="group-1">Foo</ButtonGroupItem>
      </>
    </FormGroup>
  );
  expect(tree).toMatchSnapshot();
});

it('renders as form group, with error, using the aria-describedby attribute', () => {
  const tree = shallow(
    <FormGroup buttonGroup labelText="My Label" error="bar">
      <>
        <ButtonGroupItem id="foo-1" name="group-1">Foo</ButtonGroupItem>
        <ButtonGroupItem id="bar-1" name="group-1">Bar</ButtonGroupItem>
      </>
    </FormGroup>
  );
  expect(tree).toMatchSnapshot();
});

it('renders as form group, with helpText and error, using two aria-describedby attributes', () => {
  const tree = shallow(
    <FormGroup buttonGroup labelText="My Label" helpText="foo" error="bar">
      <>
        <ButtonGroupItem id="foo-1" name="group-1">Foo</ButtonGroupItem>
        <ButtonGroupItem id="bar-1" name="group-1">Bar</ButtonGroupItem>
      </>
    </FormGroup>
  );
  expect(tree).toMatchSnapshot();
});