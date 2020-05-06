'use strict';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Mock the GUID generation to stop them being random
jest.mock('shortid', () => {
  return {
    generate: jest.fn(() => 1)
  };
});

configure({ adapter: new Adapter() });