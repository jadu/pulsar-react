import React from 'react';
import Button from './components/html/Button';

import FormGroup from './components/form/FormGroup/FormGroup';
import CheckboxInput from './components/form/CheckboxInput/CheckboxInput';
import RadioButton from './components/form/RadioButton/RadioButton';
import TextInput from './components/form/TextInput/TextInput';
import PasswordInput from './components/form/TextInput/PasswordInput';
import TextArea from './components/form/TextArea/TextArea';


export default class App extends React.Component {
  render () {
    return (
      <div>
        <h1>Buttons</h1>
        <Button>Bar</Button>
        <Button className="btn--primary" id="baz" data-foo="bar">Baz</Button>
        <Button disabled>Disabled</Button>
        <hr />
<form>

        <FormGroup
          htmlFor="alpha" 
          labelText="This is my top level label"
        >
          <TextInput required
            id="alpha"
            placeholder="My placeholder"
            />
        </FormGroup>

        <FormGroup error required 
          helpText="This is my help text"
          errorText="Errrrorrrrr"
          labelText="This is my top level label"
        >
          <TextInput required
            placeholder="My placeholder"
            />
        </FormGroup>

</form>

      </div>
    );
  }
}
