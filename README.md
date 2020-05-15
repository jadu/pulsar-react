# Pulsar React Components

A collection of Pulsar components implemented using React.

## Form input component support

| Component | Status |
| --------- | ------ |
| ButtonGroup | ✅ |
| Checkbox | ✅ |
| Choice | ✅ |
| Color | ✅ |
| Compound | ✅ (achieved with form group `inline` variant |
| Content | ✅ |
| DateInput | ✅ |
| ErrorSummary | ✖ |
| Fieldset | ✅ |
| File | ✅ |
| Form | ✅ |
| Hidden | ✅ |
| InlineCheckbox | ✅ |
| InlineRadioButton | ✅ |
| PasswordInput | ✅ |
| RadioButton | ✅ |
| Range | ✅ |
| Select | ✅ |
| Select2 | ✅ |
| TextArea | ✅ |
| TextInput | ✅ |
| TimeInput | ✅ |
| ToggleSwitch | ✅ |

## Form structure component support

| Component | Status |
| --------- | ------ |
| ErrorBlock | ✅ |
| FormGroup | ✅ |
| FormLabel | ✅ |
| HelpBlock | ✅ |

# Basic examples

**Button group**

```jsx
<FormGroup buttonGroup labelText="Group label">
  <ButtonGroupItem type="radio" id="foo-1" name="group-1">Foo</ButtonGroupItem>
  <ButtonGroupItem type="radio" id="bar-1" name="group-1">Bar</ButtonGroupItem>
  <ButtonGroupItem type="radio" id="baz-1" name="group-1">Baz</ButtonGroupItem>
</FormGroup>
```

**Checkbox**

```jsx
<FormGroup checkbox labelText="Group label">
  <Checkbox name="foo" />
</FormGroup>
```

**Choice**

```jsx
<FormGroup choiceGroup labelText="Assign blame to">
  <ChoiceGroupItem type="radio" name="choice-1" value="choice-1-sun">Sunshine</ChoiceGroupItem>
  <ChoiceGroupItem type="radio" name="choice-1" value="choice-1-moon">Moonlight</ChoiceGroupItem>
  <ChoiceGroupItem type="radio" name="choice-1" value="choice-1-good">Good times</ChoiceGroupItem> 
  <ChoiceGroupItem type="radio" name="choice-1" value="choice-1-boog">Boogie</ChoiceGroupItem>
</FormGroup>
```

**Color**

```jsx
<FormGroup labelText="Group label">
  <ColorInput name="foo" />
</FormGroup>
```

**Compound**

```jsx
<FormGroup inline labelText="Group label">
  <TextInput width={1} name="dd" placeholder="DD" />
  <TextInput width={1} name="mm" placeholder="MM" />
  <TextInput width={1} name="yyyy" placeholder="YYYY" />
</FormGroup>
```

**Content**

```jsx
<FormGroup content labelText="Group label">
  <Content>This is content</Content>
</FormGroup>
```

**DateInput**

```jsx
<FormGroup labelText="Group label">
  <DateInput name="foo" />
</FormGroup>
```

**ErrorSummary**

To do...

**Fieldset**

```jsx
<Fieldset legendText="Legend">
</Fieldset>
```

**File**

```jsx
<FormGroup labelText="Group label">
  <FileInput name="foo" />
</FormGroup>
```

**Form**

```jsx
<Form></Form>
```

**Hidden**

```jsx
<HiddenInput name="foo" />
```

**InlineCheckbox**

```jsx
<FormGroup inlineCheckbox>
  <InlineCheckbox 
    labelText="Inline checkbox"
    name="foo"
  />
</FormGroup>
```

**InlineRadioButton**

```jsx
<FormGroup inlineRadioButton>
  <InlineRadioButton 
    labelText="Inline radio"
    name="foo"
  />
</FormGroup>
```

**PasswordInput**

```jsx
<FormGroup labelText="Group label">
  <PasswordInput name="foo" />
</FormGroup>
```

**RadioButton**

```jsx
<FormGroup radioButton labelText="Radio">
  <RadioButton name="foo" />
</FormGroup>
```

**Range**

```jsx
<FormGroup rangeInput labelText="Group label">
  <RangeInput name="foo" />
</FormGroup>
```

**Select**

```jsx
<FormGroup labelText="Group label">
  <Select 
    options=[
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ]
  />
</FormGroup>
```

**Select2**

```jsx
<FormGroup labelText="Group label">
  <Select2 
    options=[
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ]
  />
</FormGroup>
```

**TextArea**

```jsx
<FormGroup labelText="Group label">
  <TextArea name="foo"></TextArea>
</FormGroup>
```

**TextInput**

```jsx
<FormGroup labelText="Group label">
  <TextInput name="foo" />
</FormGroup>
```

**TimeInput**

```jsx
<FormGroup labelText="Group label">
  <TimeInput name="foo" />
</FormGroup>
```

**ToggleSwitch**

```jsx
<FormGroup labelText="Group label">
  <ToggleSwitch name="foo" />
</FormGroup>
```
```

