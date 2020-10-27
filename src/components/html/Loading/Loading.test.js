'use strict';

import React from 'react';
import { shallow, render } from 'enzyme';

import Loading from './Loading';

it('renders the base elements', () => {
  const tree = render(
    <Loading />
  );
  expect(tree).toMatchSnapshot();
});

it('renders the large variation', () => {
  const tree = render(
    <Loading large />
  );
  expect(tree).toMatchSnapshot();
});

it('renders the block variation', () => {
  const tree = render(
    <Loading block />
  );
  expect(tree).toMatchSnapshot();
});

it('allows a custom loading message with the block variation', () => {
  const tree = render(
    <Loading block>foo</Loading>
  );
  expect(tree).toMatchSnapshot();
});