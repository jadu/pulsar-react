import React from 'react';
import Button from './components/html/Button';

import FormGroup from './components/form/FormGroup';
import Fieldset from './components/form/Fieldset';
import Checkbox from './components/form/Checkbox';
import DateInput from './components/form/DateInput';
import FileInput from './components/form/FileInput';
import InlineCheckbox from './components/form/InlineCheckbox';
import InlineRadioButton from './components/form/InlineRadioButton';
import RadioButton from './components/form/RadioButton';
import TextInput from './components/form/TextInput';
import PasswordInput from './components/form/PasswordInput';
import TextArea from './components/form/TextArea';


export default class App extends React.Component {
  
  render () {
    let helpText = 'Help text to give more information about expected input';

    let changedLabel = 'Changed';
    let changedHelp = 'Something changed';
    let successLabel = 'Success';
    let successHelp = 'Something good happened';
    let warningLabel = 'Warning';
    let warningHelp = 'Something bad happened';
    let disabledLabel = 'Disabled';
    let disabledHelp = 'Can’t touch this';

    return (
      <div>
        <h1>Buttons</h1>
        <Button>Bar</Button>
        <Button className="btn--primary" id="baz" data-foo="bar">Baz</Button>
        <Button disabled>Disabled</Button>
        <hr />

        <form className="form">

          {/* Text */}
          <Fieldset legendText="Text inputs">
            <FormGroup labelText="Basic" helpText={helpText}>
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
              labelText={changedLabel}
              helpText={changedHelp}
            >
              <TextInput />
            </FormGroup>

            <FormGroup success
              labelText={successLabel}
              helpText={successHelp}
            >
              <TextInput />
            </FormGroup>

            <FormGroup warning
              labelText={warningLabel}
              helpText={warningHelp}
            >
              <TextInput />
            </FormGroup>

            <FormGroup
              labelText={disabledLabel}
              helpText={disabledHelp}
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

          {/* Checkboxes */}
          <Fieldset legendText="Checkbox inputs">
            <FormGroup checkbox labelText="Basic">
              <Checkbox />
            </FormGroup>

            <FormGroup checkbox required
              labelText="Required"
            >
              <Checkbox required />
            </FormGroup>

            <FormGroup checkbox
              labelText="Help text"
              helpText={helpText}
            >
              <Checkbox 
                placeholder="Placeholder"
              />
            </FormGroup>
          </Fieldset>
          <Fieldset legendText="States and validation">
            <FormGroup checkbox
              error="This is my error message"
              labelText="This is my top level label"
            >
              <Checkbox required />
            </FormGroup>

            <FormGroup checkbox
              error="This is my error message"
              helpText={helpText}
              labelText="This is my top level label"
            >
              <Checkbox required />
            </FormGroup>

            <FormGroup checkbox changed
              labelText={changedLabel}
              helpText={changedHelp}
            >
              <Checkbox />
            </FormGroup>

            <FormGroup checkbox success
              labelText={successLabel}
              helpText={successHelp}
            >
              <Checkbox />
            </FormGroup>

            <FormGroup checkbox warning
              labelText={warningLabel}
              helpText={warningHelp}
            >
              <Checkbox />
            </FormGroup>

            <FormGroup checkbox
              labelText={disabledLabel}
              helpText={disabledHelp}

            >
              <Checkbox disabled />
            </FormGroup>
          </Fieldset>
          <Fieldset legendText="Alignment">
            <FormGroup checkbox hideLabel
              helpText="This example hides the label with the show-label option"
              labelText="This label should not be displayed, but kept in the markup for screen readers"
            >
              <Checkbox />
            </FormGroup>

            <FormGroup checkbox 
              helpText={helpText}
              labelText="Text input with a longer than expected label which will probably wrap multiple lines"
            >
              <Checkbox />
            </FormGroup>

            <FormGroup checkbox topLabel
              helpText={helpText}
              labelText="Text input with a longer than expected label but using the topLabel variant"
            >
              <Checkbox />
            </FormGroup>

            <FormGroup checkbox topLabel flushLabel
              helpText={helpText}
              labelText="Text input with a longer than expected label, using the topLabel and flushLabel variant"
            >
              <Checkbox />
            </FormGroup>

            <FormGroup inlineCheckbox
            >
              <InlineCheckbox 
                labelText="Inline checkbox"
              />
            </FormGroup>

            <FormGroup inlineCheckbox
              helpText={helpText}
              >
              <InlineCheckbox 
                labelText="Inline checkbox with help"
                />
            </FormGroup>

            <FormGroup inlineCheckbox indented
            >
              <InlineCheckbox 
                labelText="Inline checkbox and indented"
                />
            </FormGroup>

            <FormGroup inlineCheckbox indented
              helpText={helpText}
              >
              <InlineCheckbox 
                labelText="Inline checkbox, indented with help"
                />
            </FormGroup>
          </Fieldset>

          {/* Radios */}
          <Fieldset legendText="Radio buttons">
            <FormGroup radio labelText="Basic">
              <RadioButton />
            </FormGroup>

            <FormGroup radio required
              labelText="Required"
            >
              <RadioButton required />
            </FormGroup>

            <FormGroup radio
              labelText="Help text"
              helpText={helpText}
            >
              <RadioButton 
                placeholder="Placeholder"
              />
            </FormGroup>
          </Fieldset>
          <Fieldset legendText="States and validation">
            <FormGroup radio
              error="This is my error message"
              labelText="This is my top level label"
            >
              <RadioButton required />
            </FormGroup>

            <FormGroup radio
              error="This is my error message"
              helpText={helpText}
              labelText="This is my top level label"
            >
              <RadioButton required />
            </FormGroup>

            <FormGroup radio changed
              labelText={changedLabel}
              helpText={changedHelp}
            >
              <RadioButton />
            </FormGroup>

            <FormGroup radio success
              labelText={successLabel}
              helpText={successHelp}
            >
              <RadioButton />
            </FormGroup>

            <FormGroup radio warning
              labelText={warningLabel}
              helpText={warningHelp}
            >
              <RadioButton />
            </FormGroup>

            <FormGroup radio
              labelText={disabledLabel}
              helpText={disabledHelp}

            >
              <RadioButton disabled />
            </FormGroup>
          </Fieldset>
          <Fieldset legendText="Alignment">
            <FormGroup radio hideLabel
              helpText="This example hides the label with the show-label option"
              labelText="This label should not be displayed, but kept in the markup for screen readers"
            >
              <RadioButton />
            </FormGroup>

            <FormGroup radio 
              helpText={helpText}
              labelText="Text input with a longer than expected label which will probably wrap multiple lines"
            >
              <RadioButton />
            </FormGroup>

            <FormGroup radio topLabel
              helpText={helpText}
              labelText="Text input with a longer than expected label but using the topLabel variant"
            >
              <RadioButton />
            </FormGroup>

            <FormGroup radio topLabel flushLabel
              helpText={helpText}
              labelText="Text input with a longer than expected label, using the topLabel and flushLabel variant"
            >
              <RadioButton />
            </FormGroup>

            <FormGroup inlineRadioButton
            >
              <InlineRadioButton 
                labelText="Inline radio"
              />
            </FormGroup>

            <FormGroup inlineRadioButton
              helpText={helpText}
              >
              <InlineRadioButton 
                labelText="Inline radio with help"
                />
            </FormGroup>

            <FormGroup inlineRadioButton indented
            >
              <InlineRadioButton 
                labelText="Inline radio and indented"
                />
            </FormGroup>

            <FormGroup inlineRadioButton indented
              helpText={helpText}
              >
              <InlineRadioButton 
                labelText="Inline radio, indented with help"
                />
            </FormGroup>
          </Fieldset>

          {/* Date */}
          <Fieldset legendText="Date">
            <FormGroup labelText="Basic">
              <DateInput />
            </FormGroup>

            <FormGroup required
              labelText="Required"
            >
              <DateInput required />
            </FormGroup>

            <FormGroup
              labelText="Help text"
              helpText={helpText}
            >
              <DateInput 
                placeholder="Placeholder"
              />
            </FormGroup>
          </Fieldset>
          <Fieldset legendText="States and validation">
            <FormGroup
              error="This is my error message"
              labelText="This is my top level label"
            >
              <DateInput required />
            </FormGroup>

            <FormGroup
              error="This is my error message"
              helpText={helpText}
              labelText="This is my top level label"
            >
              <DateInput required />
            </FormGroup>

            <FormGroup changed
              labelText={changedLabel}
              helpText={changedHelp}
            >
              <DateInput />
            </FormGroup>

            <FormGroup success
              labelText={successLabel}
              helpText={successHelp}
            >
              <DateInput />
            </FormGroup>

            <FormGroup warning
              labelText={warningLabel}
              helpText={warningHelp}
            >
              <DateInput />
            </FormGroup>

            <FormGroup
              labelText={disabledLabel}
              helpText={disabledHelp}

            >
              <DateInput disabled />
            </FormGroup>
          </Fieldset>
          <Fieldset legendText="Alignment">
            <FormGroup hideLabel
              helpText="This example hides the label with the show-label option"
              labelText="This label should not be displayed, but kept in the markup for screen readers"
            >
              <DateInput />
            </FormGroup>

            <FormGroup 
              helpText={helpText}
              labelText="Text input with a longer than expected label which will probably wrap multiple lines"
            >
              <DateInput />
            </FormGroup>

            <FormGroup topLabel
              helpText={helpText}
              labelText="Text input with a longer than expected label but using the topLabel variant"
            >
              <DateInput />
            </FormGroup>

            <FormGroup topLabel flushLabel
              helpText={helpText}
              labelText="Text input with a longer than expected label, using the topLabel and flushLabel variant"
            >
              <DateInput />
            </FormGroup>
          </Fieldset>
          <Fieldset legendText="Grid sizes">
            <FormGroup width={1}
              labelText="One Column" 
            >
              <DateInput />
            </FormGroup>

            <FormGroup width={2}
              labelText="Two Columns" 
            >
              <DateInput />
            </FormGroup>

            <FormGroup width={3}
              labelText="Three Columns" 
            >
              <DateInput />
            </FormGroup>

            <FormGroup width={4}
              labelText="Four Columns" 
            >
              <DateInput />
            </FormGroup>

            <FormGroup width={5}
              labelText="Five Columns" 
            >
              <DateInput />
            </FormGroup>

            <FormGroup width={6}
              labelText="Six Columns" 
            >
              <DateInput />
            </FormGroup>

            <FormGroup width={7}
              labelText="Seven Columns" 
            >
              <DateInput />
            </FormGroup>

            <FormGroup width={8}
              labelText="Eight Columns" 
            >
              <DateInput />
            </FormGroup>

            <FormGroup width={9}
              labelText="Nine Columns" 
            >
              <DateInput />
            </FormGroup>
          </Fieldset>

          {/* Textarea */}
          <Fieldset legendText="Date">
            <FormGroup labelText="Basic">
              <TextArea></TextArea>
            </FormGroup>

            <FormGroup labelText="Rows">
              <TextArea rows={5} />
            </FormGroup>

            <FormGroup required
              labelText="Required"
            >
              <TextArea required />
            </FormGroup>

            <FormGroup
              labelText="Help text"
              helpText={helpText}
            >
              <TextArea 
                placeholder="Placeholder"
              />
            </FormGroup>
          </Fieldset>
          <Fieldset legendText="States and validation">
            <FormGroup
              error="This is my error message"
              labelText="This is my top level label"
            >
              <TextArea required />
            </FormGroup>

            <FormGroup
              error="This is my error message"
              helpText={helpText}
              labelText="This is my top level label"
            >
              <TextArea required />
            </FormGroup>

            <FormGroup changed
              labelText={changedLabel}
              helpText={changedHelp}
            >
              <TextArea></TextArea>
            </FormGroup>

            <FormGroup success
              labelText={successLabel}
              helpText={successHelp}
            >
              <TextArea></TextArea>
            </FormGroup>

            <FormGroup warning
              labelText={warningLabel}
              helpText={warningHelp}
            >
              <TextArea></TextArea>
            </FormGroup>

            <FormGroup
              labelText={disabledLabel}
              helpText={disabledHelp}

            >
              <TextArea disabled />
            </FormGroup>
          </Fieldset>
          <Fieldset legendText="Alignment">
            <FormGroup hideLabel
              helpText="This example hides the label with the show-label option"
              labelText="This label should not be displayed, but kept in the markup for screen readers"
            >
              <TextArea></TextArea>
            </FormGroup>

            <FormGroup 
              helpText={helpText}
              labelText="Text input with a longer than expected label which will probably wrap multiple lines"
            >
              <TextArea></TextArea>
            </FormGroup>

            <FormGroup topLabel
              helpText={helpText}
              labelText="Text input with a longer than expected label but using the topLabel variant"
            >
              <TextArea></TextArea>
            </FormGroup>

            <FormGroup topLabel flushLabel
              helpText={helpText}
              labelText="Text input with a longer than expected label, using the topLabel and flushLabel variant"
            >
              <TextArea></TextArea>
            </FormGroup>
          </Fieldset>
          <Fieldset legendText="Grid sizes">
            <FormGroup width={1}
              labelText="One Column" 
            >
              <TextArea></TextArea>
            </FormGroup>

            <FormGroup width={2}
              labelText="Two Columns" 
            >
              <TextArea></TextArea>
            </FormGroup>

            <FormGroup width={3}
              labelText="Three Columns" 
            >
              <TextArea></TextArea>
            </FormGroup>

            <FormGroup width={4}
              labelText="Four Columns" 
            >
              <TextArea></TextArea>
            </FormGroup>

            <FormGroup width={5}
              labelText="Five Columns" 
            >
              <TextArea></TextArea>
            </FormGroup>

            <FormGroup width={6}
              labelText="Six Columns" 
            >
              <TextArea></TextArea>
            </FormGroup>

            <FormGroup width={7}
              labelText="Seven Columns" 
            >
              <TextArea></TextArea>
            </FormGroup>

            <FormGroup width={8}
              labelText="Eight Columns" 
            >
              <TextArea></TextArea>
            </FormGroup>

            <FormGroup width={9}
              labelText="Nine Columns" 
            >
              <TextArea></TextArea>
            </FormGroup>
          </Fieldset>

        </form>

      </div>
    );
  }
}
