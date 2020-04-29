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

        <form className="form">
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

          <FormGroup topLabel
            htmlFor="alpha" 
            labelText="This is my top level label"
          >
            <TextInput required
              id="alpha"
              placeholder="My placeholder"
              />
          </FormGroup>

          <FormGroup width={1}
            labelText="One Column" 
          >
            <TextInput 
              />
          </FormGroup>

          <FormGroup width={2}
            labelText="Two Columns" 
          >
            <TextInput 
              />
          </FormGroup>

          <FormGroup width={3}
            labelText="Three Columns" 
          >
            <TextInput 
              />
          </FormGroup>

          <FormGroup width={4}
            labelText="Four Columns" 
          >
            <TextInput 
              />
          </FormGroup>

          <FormGroup width={5}
            labelText="Five Columns" 
          >
            <TextInput 
              />
          </FormGroup>

          <FormGroup width={6}
            labelText="Six Columns" 
          >
            <TextInput 
              />
          </FormGroup>

          <FormGroup width={7}
            labelText="Seven Columns" 
          >
            <TextInput 
              />
          </FormGroup>

          <FormGroup width={8}
            labelText="Eight Columns" 
          >
            <TextInput 
              />
          </FormGroup>

          <FormGroup width={9}
            labelText="Nine Columns" 
          >
            <TextInput 
              />
          </FormGroup>
        </form>

      </div>
    );
  }
}
