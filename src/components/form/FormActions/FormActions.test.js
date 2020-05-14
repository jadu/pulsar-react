'use strict';

import React from 'react';
import { render } from 'enzyme';

import FormActions from './FormActions';

it('Renders the form actions wrapper', () => {
  const tree = render(
    <FormActions>foo</FormActions>
  );
  expect(tree).toMatchSnapshot();
});
