import React from 'react';
import Button from './components/html/Button';

import FormGroup from './components/form/FormGroup/FormGroup';
import CheckboxInput from './components/form/CheckboxInput/CheckboxInput';
import RadioButton from './components/form/RadioButton/RadioButton';
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
            id="foo"
            labelText="Text field" 
            />
        </FormGroup>

        <FormGroup>
          <TextInput 
            required
            id="foo"
            labelText="Required" 
            />
        </FormGroup>

        <FormGroup>
          <TextInput 
            id="foo"
            labelText="Placeholder" 
            placeholder="My placeholder"
            />
        </FormGroup>

        <FormGroup>
          <TextInput 
            id="foo"
            labelText="Text field with help" 
            helpText="Help text to give more information about expected input" 
            />
        </FormGroup>

        <FormGroup>
          <TextInput
            hideLabel
            id="foo"
            labelText="Basic" 
            helpText="This example hides the label with the hideLabel option"
            />
        </FormGroup>

        <FormGroup>
          <TextInput 
            id="foo"
            labelText="Text input with a longer than expected label which will probably wrap multple lines and push the following input onto the next baseline" 
            helpText="Help text to give more information about expected input" 
            />
        </FormGroup>

        <FormGroup topLabel>
          <TextInput 
            id="foo"
            labelText="Text input with a longer than expected label but this time we use the form__group--top class to keep the label on a single line" 
            helpText="Help text to give more information about expected input" 
            />
        </FormGroup>

        <FormGroup topLabel flushLabel>
          <TextInput 
            id="foo"
            labelText="The same as above, but this time we also add the .form__group--flush class to keep everything on the left edge" 
            helpText="Help text to give more information about expected input" 
            />
        </FormGroup>

        <FormGroup className="form__control-col--1">
          <TextInput 
            id="foo"
            labelText="One Column" 
            />
        </FormGroup>

        <FormGroup className="form__control-col--2">
          <TextInput 
            id="foo"
            labelText="Two Columns" 
            />
        </FormGroup>

        <FormGroup className="form__control-col--3">
          <TextInput 
            id="foo"
            labelText="Three Columns" 
            />
        </FormGroup>

        <FormGroup className="form__control-col--4">
          <TextInput 
            id="foo"
            labelText="Four Columns" 
            />
        </FormGroup>

        <FormGroup className="form__control-col--5">
          <TextInput 
            id="foo"
            labelText="Five Columns" 
            />
        </FormGroup>

        <FormGroup className="form__control-col--6">
          <TextInput 
            id="foo"
            labelText="Six Columns" 
            />
        </FormGroup>

        <FormGroup className="form__control-col--7">
          <TextInput 
            id="foo"
            labelText="Seven Columns" 
            />
        </FormGroup>

        <FormGroup className="form__control-col--8">
          <TextInput 
            id="foo"
            labelText="Eight Columns" 
            />
        </FormGroup>

        <FormGroup className="form__control-col--9">
          <TextInput 
            id="foo"
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
</form>

      </div>
    );
  }
}
