import React from 'react';
import Button from './components/html/Button';

import FormGroup from './components/form/FormGroup';
import Fieldset from './components/form/Fieldset';
import CheckboxInput from './components/form/CheckboxInput';
import RadioButton from './components/form/RadioButton';
import TextInput from './components/form/TextInput';
import PasswordInput from './components/form/PasswordInput';
import TextArea from './components/form/TextArea';


export default class App extends React.Component {
  
  render () {
    let helpText = 'Help text to give more information about expected input';

    return (
      <div>
        <h1>Buttons</h1>
        <Button>Bar</Button>
        <Button className="btn--primary" id="baz" data-foo="bar">Baz</Button>
        <Button disabled>Disabled</Button>
        <hr />

        <form className="form">

          <Fieldset legendText="Text inputs">
            <FormGroup labelText="Basic">
              <TextInput />
            </FormGroup>

            <FormGroup required
              labelText="Required"
            >
              <TextInput required />
            </FormGroup>

            <FormGroup 
              labelText="Placeholder"
            >
              <TextInput 
                placeholder="Placeholder"
              />
            </FormGroup>

            <FormGroup
              labelText="Help text"
              helpText={helpText}
            >
              <TextInput 
                placeholder="Placeholder"
              />
            </FormGroup>
          </Fieldset>

          <Fieldset legendText="States and validation">

          <FormGroup
              error="This is my error message"
              labelText="This is my top level label"
            >
              <TextInput required />
            </FormGroup>

            <FormGroup
              error="This is my error message"
              helpText={helpText}
              labelText="This is my top level label"
            >
              <TextInput required />
            </FormGroup>

            <FormGroup changed
              labelText="Changed"
            >
              <TextInput />
            </FormGroup>

            <FormGroup success
              labelText="Success"
            >
              <TextInput />
            </FormGroup>

            <FormGroup warning
              labelText="Warning"
            >
              <TextInput />
            </FormGroup>

            <FormGroup
              labelText="Disabled"
            >
              <TextInput disabled />
            </FormGroup>

          </Fieldset>

          <Fieldset legendText="Alignment">
            <FormGroup hideLabel
              helpText="This example hides the label with the show-label option"
              labelText="This label should not be displayed, but kept in the markup for screen readers"
            >
              <TextInput />
            </FormGroup>

            <FormGroup 
              helpText={helpText}
              labelText="Text input with a longer than expected label which will probably wrap multiple lines"
            >
              <TextInput />
            </FormGroup>

            <FormGroup topLabel
              helpText={helpText}
              labelText="Text input with a longer than expected label but using the topLabel variant"
            >
              <TextInput />
            </FormGroup>

            <FormGroup topLabel flushLabel
              helpText={helpText}
              labelText="Text input with a longer than expected label, using the topLabel and flushLabel variant"
            >
              <TextInput />
            </FormGroup>

          </Fieldset>

          <Fieldset legendText="Grid sizes">

            <FormGroup width={1}
              labelText="One Column" 
            >
              <TextInput />
            </FormGroup>

            <FormGroup width={2}
              labelText="Two Columns" 
            >
              <TextInput />
            </FormGroup>

            <FormGroup width={3}
              labelText="Three Columns" 
            >
              <TextInput />
            </FormGroup>

            <FormGroup width={4}
              labelText="Four Columns" 
            >
              <TextInput />
            </FormGroup>

            <FormGroup width={5}
              labelText="Five Columns" 
            >
              <TextInput />
            </FormGroup>

            <FormGroup width={6}
              labelText="Six Columns" 
            >
              <TextInput />
            </FormGroup>

            <FormGroup width={7}
              labelText="Seven Columns" 
            >
              <TextInput />
            </FormGroup>

            <FormGroup width={8}
              labelText="Eight Columns" 
            >
              <TextInput />
            </FormGroup>

            <FormGroup width={9}
              labelText="Nine Columns" 
            >
              <TextInput />
            </FormGroup>

          </Fieldset>

        </form>

      </div>
    );
  }
}
