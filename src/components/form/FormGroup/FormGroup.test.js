'use strict';

import React from 'react';
import { shallow, render } from 'enzyme';

import FormGroup from './FormGroup';

it('should return null if no children', () => {
  const tree = render(
    <FormGroup></FormGroup>
  );
  expect(tree).toMatchSnapshot();
});

it('should render the basic form group', () => {
  const tree = render(
    <FormGroup>
      <React.Fragment>foo</React.Fragment>
    </FormGroup>
  );
  expect(tree).toMatchSnapshot();
});

it('should add the button group classes if using buttonGroup variant', () => {
  const tree = shallow(
    <FormGroup buttonGroup>
      <React.Fragment>foo</React.Fragment>
    </FormGroup>
  );
  expect(tree).toMatchSnapshot();
});

it('should use fieldset strategy if using choiceGroup variant', () => {
  const tree = shallow(
    <FormGroup choiceGroup>
      <React.Fragment>foo</React.Fragment>
    </FormGroup>
  );
  expect(tree).toMatchSnapshot();
});

it('should add the indented class if using indented variant', () => {
  const tree = shallow(
    <FormGroup indented>
      <React.Fragment>foo</React.Fragment>
    </FormGroup>
  );
  expect(tree).toMatchSnapshot();
});

it('should use toggle strategy if using toggle variant', () => {
  const tree = shallow(
    <FormGroup toggle>
      <React.Fragment>foo</React.Fragment>
    </FormGroup>
  );
  expect(tree).toMatchSnapshot();
});

it('should add the top label class if using topLabel variant', () => {
  const tree = shallow(
    <FormGroup topLabel>
      <React.Fragment>foo</React.Fragment>
    </FormGroup>
  );
  expect(tree).toMatchSnapshot();
});

it('should add the flush label class if using flushLabel variant', () => {
  const tree = shallow(
    <FormGroup flushLabel>
      <React.Fragment>foo</React.Fragment>
    </FormGroup>
  );
  expect(tree).toMatchSnapshot();
});

it('should add the checkbox class if using checkbox variant', () => {
  const tree = shallow(
    <FormGroup checkbox>
      <React.Fragment>foo</React.Fragment>
    </FormGroup>
  );
  expect(tree).toMatchSnapshot();
});

it('should use inline strategy if using inlineCheckbox variant', () => {
  const tree = shallow(
    <FormGroup inlineCheckbox>
      <React.Fragment>foo</React.Fragment>
    </FormGroup>
  );
  expect(tree).toMatchSnapshot();
});

it('should use inline strategy if using inlineRadioButton variant', () => {
  const tree = shallow(
    <FormGroup inlineRadioButton>
      <React.Fragment>foo</React.Fragment>
    </FormGroup>
  );
  expect(tree).toMatchSnapshot();
});

it('should add the radio class if using radio variant', () => {
  const tree = shallow(
    <FormGroup radioButton>
      <React.Fragment>foo</React.Fragment>
    </FormGroup>
  );
  expect(tree).toMatchSnapshot();
});

it('should add the success class if using success variant', () => {
  const tree = shallow(
    <FormGroup success>
      <React.Fragment>foo</React.Fragment>
    </FormGroup>
  );
  expect(tree).toMatchSnapshot();
});

it('should add the changed class if using changed variant', () => {
  const tree = shallow(
    <FormGroup changed>
      <React.Fragment>foo</React.Fragment>
    </FormGroup>
  );
  expect(tree).toMatchSnapshot();
});

it('should add the warning class if using warning variant', () => {
  const tree = shallow(
    <FormGroup warning>
      <React.Fragment>foo</React.Fragment>
    </FormGroup>
  );
  expect(tree).toMatchSnapshot();
});

it('should add the error class if using error variant', () => {
  const tree = shallow(
    <FormGroup error="error message">
      <React.Fragment>foo</React.Fragment>
    </FormGroup>
  );
  expect(tree).toMatchSnapshot();
});

it('should prepend text', () => {
  const tree = shallow(
    <FormGroup prependText="prepended">
      <React.Fragment>foo</React.Fragment>
    </FormGroup>
  );
  expect(tree).toMatchSnapshot();
});

it('should append text', () => {
  const tree = shallow(
    <FormGroup appendText="appended">
      <React.Fragment>foo</React.Fragment>
    </FormGroup>
  );
  expect(tree).toMatchSnapshot();
});

it('should append and prepend text', () => {
  const tree = shallow(
    <FormGroup prependText="prepended" appendText="appended">
      <React.Fragment>foo</React.Fragment>
    </FormGroup>
  );
  expect(tree).toMatchSnapshot();
});