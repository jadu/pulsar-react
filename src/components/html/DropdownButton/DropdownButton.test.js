'use strict';

import React from 'react';
import { shallow, render } from 'enzyme';

import DropdownButton from './DropdownButton';

it('renders the basic dropdown button', () => {
  const tree = shallow(
    <DropdownButton />
  );
  expect(tree).toMatchSnapshot();
});

it('allows a custom label', () => {
  const tree = shallow(
    <DropdownButton label="Hello" />
  );
  expect(tree).toMatchSnapshot();
});

it('add additional classes on the button', () => {
  const tree = shallow(
    <DropdownButton 
      className="foo"
      label="Hello" />
  );
  expect(tree).toMatchSnapshot();
});

it('renders one list item', () => {
  const tree = shallow(
    <DropdownButton 
      items={[
        { id: 'chocolate', label: 'Chocolate' }
      ]}
    />
  );
  expect(tree).toMatchSnapshot();
});

it('renders multiple list items', () => {
  const tree = shallow(
    <DropdownButton 
      items={[
        { id: 'chocolate', label: 'Chocolate' },
        { id: 'strawberry', label: 'Strawberry' },
        { id: 'vanilla', label: 'Vanilla' }
      ]}
    />
  );
  expect(tree).toMatchSnapshot();
});

it('should obey the button variations', () => {
  const tree = render(
    <DropdownButton primary />
  );
  expect(tree).toMatchSnapshot();
});
