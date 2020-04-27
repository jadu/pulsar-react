import React from 'react';
import Button from './components/html/Button';

import Checkbox from './components/form/Checkbox';
import Text from './components/form/Text';


export default class App extends React.Component {
  render () {
    return (
      <div>
        <h1>Buttons</h1>
        <Button>Bar</Button>
        <Button className="btn--primary" id="baz" data-foo="bar">Baz</Button>
        <Button disabled>Disabled</Button>
        <h1>Inputs</h1>
        <Text />
        <Text label="Basic" />
        <Text label="With Help" help="My help text" />
        <Text label="Required" help="My help text" required data-foo="bar" value="value" />
        <Checkbox label="My Label" help="My help text" />
      </div>
    );
  }
}
