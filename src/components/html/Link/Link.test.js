'use strict';

import React from 'react';
import { render } from 'enzyme';

import Link from './Link';

it('renders the base Link', () => {
  const tree = render(
    <Link href="#foo">bar</Link>
  );
  expect(tree).toMatchSnapshot();
});
