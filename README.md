# form2

> React component that let you handle form values without use component state

##Overview
When you create form in React, You need to use state to handle values changes. This package helps you creating form and handle it's values on submit without need to set values to state. All what you have to do, is to call `onSubmit`, and the event.target.values will be an object contains fields names and values.

[![NPM](https://img.shields.io/badge/version-2.5.0-green.svg)](https://www.npmjs.com/package/form2) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save form2
```

## Usage

The goal is to create a form without saving it's value in the component state. Let's start doing it. To benefit from this package, you have to replace the normal `form` html element with our new component `Form` that you can import it using:
```javascript
import { Form } from 'form2';
```
And you can create the form in the rendered JSX by, and add onSubmit action for it:
```typescript jsx
<Form onSubmit={(event) => { /* Use the form fields values by event.target.values */ }}>
    <!-- form fields should be implemented here too! -->
</Form>
```

To be able to get values inside onSubmit function, you have to use our components inside the components (and don't miss to import it with the `Form` component)
```typescript jsx
<Form onSubmit={(event) => { /* Use the form fields values by event.target.values */ }}>
    <TextField name="username" />
    <PasswordField name="password">
</Form>
```

and Let's combine everything in one component!

```javascript

import React, { Component } from 'react'

import { Form, TextField, DatePicker } from 'form2';
import './App.css'

export default class TestComponent extends Component {
  render () {
    return (
      <div>
        <Form onSubmit={(event) => { /* Handle fields values by: typing `event.target.values` */ }}>
          <TextField name="username" />
          <TextField name="email" placeholder="Type correct email..." />
          <DatePicker name="birthday" />
         </Form>
      </div>
    )
  }
}
```

## Field Types Supported
 - TextField
 - PasswordField
 - DatePicker
 - DateTimePicker
 
 ## Properties
 Any property can be added to input, can also be added to our fields, ex:
 ```typescript jsx
  <TextField name="username" placeholder="Type Username..." />
```
## License

MIT © [mhmdtshref](https://github.com/mhmdtshref)
