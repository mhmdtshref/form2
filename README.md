# form2

> React component to let you use form without use component state

When you create form in React, You need to use state to handle values changes. This package helps you creating form and handle it's values on submit without need to set values to state. All what you have to do, is to call `onSubmit`, and the event.target.values will be an array contains fields values.

[![NPM](https://img.shields.io/npm/v/form2.svg)](https://www.npmjs.com/package/form2) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save form2
```

## Usage

```js

import React, { Component } from 'react'

import { Form, TextField } from 'form2';
import './App.css'

export default class App extends Component {
  render () {
    return (
      <div>
        <Form>
          <TextField name="username" />
          <TextField name="email" placeholder="Type correct email..." />
         </Form>
      </div>
    )
  }
}

```

## Field Types Supported
 - TextField
 
 ## Properties
 Any property can be added to input, can also be added to our fields, ex:
 ```jsx harmony
  <TextField name="username" placeholder="Type Username..." />
```
## License

MIT © [mhmdtshref](https://github.com/mhmdtshref)
