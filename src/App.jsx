import React from 'react';
import Button from './components/html/Button';

import FormGroup from './components/form/FormGroup/FormGroup';
import CheckboxInput from './components/form/CheckboxInput/CheckboxInput';
import TextInput from './components/form/TextInput/TextInput';


export default class App extends React.Component {
  render () {
    return (
      <div>
        <h1>Buttons</h1>
        <Button>Bar</Button>
        <Button className="btn--primary" id="baz" data-foo="bar">Baz</Button>
        <Button disabled>Disabled</Button>
        <h1>Inputs</h1>
        {/* <Text />
        <Text label="Basic" />
        <Text label="With Help" help="My help text" />
        <Text label="Required" help="My help text2" foo="bar" />
        <Text label="With value" help="My help text" value="My value" />
        <Checkbox label="My Label" help="My help text" />
        <Radio label="My Label" help="My help text" /> */}

        <hr />
<form>
        <FormGroup>
          <TextInput 
            required
            id="foo"
            labelText="My label text" 
            helpText="My help text" 
            />
        </FormGroup>

        <FormGroup className="form-checkbox">
          <CheckboxInput 
            required
            id="bar"
            labelText="My label text" 
            helpText="My help text" 
            />
        </FormGroup>
</form>

      </div>
    );
  }
}
