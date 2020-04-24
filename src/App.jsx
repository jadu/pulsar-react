import React from 'react';
import Button from './components/html/Button';
import Group from './components/form/Group';
import Text from './components/form/Text';

export default class App extends React.Component {
  render () {
    return (
      <div>
        Buttons 
        <Button>Bar</Button>
        <Button className="btn--primary" id="baz" data-foo="bar">Baz</Button>
        <Button disabled>Disabled</Button>
        <Text />
        <Text label="My Label" help="My help text" />
      </div>
    );
  }
}
