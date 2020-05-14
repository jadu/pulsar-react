'use strict';

import React from 'react';
import { render } from 'enzyme';

import Fieldset from './Fieldset';

it('Renders the fieldset without a legend', () => {
  const tree = render(
    <Fieldset>Foo</Fieldset>
  );
  expect(tree).toMatchSnapshot();
});

it('Renders the fieldset with the legend', () => {
  const tree = render(
    <Fieldset legendText="Bar">Foo</Fieldset>
  );
  expect(tree).toMatchSnapshot();
});

it('Renders the fieldset with the legend classes', () => {
  const tree = render(
    <Fieldset 
      legendClassName="baz"
      legendText="Bar"
    >
      Foo
    </Fieldset>
  );
  expect(tree).toMatchSnapshot();
});
