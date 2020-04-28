import React from 'react';
import Button from './components/html/Button';

import FormGroup from './components/form/FormGroup/FormGroup';
import CheckboxInput from './components/form/CheckboxInput/CheckboxInput';
import RadioButton from './components/form/RadioButton/RadioButton';
import TextInput from './components/form/TextInput/TextInput';
import PasswordInput from './components/form/TextInput/PasswordInput';


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

        <FormGroup>
          <TextInput 
            id="foo"
            labelText="Text field" 
            />
        </FormGroup>

        <FormGroup>
          <TextInput 
            required
            labelText="Required" 
            />
        </FormGroup>

        <FormGroup>
          <TextInput 
            labelText="Placeholder" 
            placeholder="My placeholder"
            />
        </FormGroup>

        <FormGroup>
          <TextInput 
            labelText="Text field with help" 
            helpText="Help text to give more information about expected input" 
            />
        </FormGroup>

        <FormGroup>
          <TextInput
            hideLabel
            labelText="Basic" 
            helpText="This example hides the label with the hideLabel option"
            />
        </FormGroup>

        <FormGroup>
          <TextInput 
            labelText="Text input with a longer than expected label which will probably wrap multple lines and push the following input onto the next baseline" 
            helpText="Help text to give more information about expected input" 
            />
        </FormGroup>

        <FormGroup topLabel>
          <TextInput 
            labelText="Text input with a longer than expected label but this time we use the form__group--top class to keep the label on a single line" 
            helpText="Help text to give more information about expected input" 
            />
        </FormGroup>

        <FormGroup topLabel flushLabel>
          <TextInput 
            labelText="The same as above, but this time we also add the .form__group--flush class to keep everything on the left edge" 
            helpText="Help text to give more information about expected input" 
            />
        </FormGroup>

        <FormGroup className="form__control-col--1">
          <TextInput 
            labelText="One Column" 
            />
        </FormGroup>

        <FormGroup className="form__control-col--2">
          <TextInput 
            labelText="Two Columns" 
            />
        </FormGroup>

        <FormGroup className="form__control-col--3">
          <TextInput 
            labelText="Three Columns" 
            />
        </FormGroup>

        <FormGroup className="form__control-col--4">
          <TextInput 
            labelText="Four Columns" 
            />
        </FormGroup>

        <FormGroup className="form__control-col--5">
          <TextInput 
            labelText="Five Columns" 
            />
        </FormGroup>

        <FormGroup className="form__control-col--6">
          <TextInput 
            labelText="Six Columns" 
            />
        </FormGroup>

        <FormGroup className="form__control-col--7">
          <TextInput 
            labelText="Seven Columns" 
            />
        </FormGroup>

        <FormGroup className="form__control-col--8">
          <TextInput 
            labelText="Eight Columns" 
            />
        </FormGroup>

        <FormGroup className="form__control-col--9">
          <TextInput 
            labelText="Nine Columns" 
            />
        </FormGroup>

        <FormGroup checkbox>
          <CheckboxInput 
            required
            id="bar"
            labelText="My label text" 
            helpText="My help text" 
            />
        </FormGroup>

        <FormGroup radio>
          <RadioButton 
            required
            id="bar"
            labelText="My label text" 
            helpText="My help text" 
            />
        </FormGroup>

        <FormGroup>
          <PasswordInput 
            labelText="Password field" 
            />
        </FormGroup>
</form>

      </div>
    );
  }
}
