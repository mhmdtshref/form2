# form2

> React component to let you use form without use component state

[![NPM](https://img.shields.io/npm/v/form2.svg)](https://www.npmjs.com/package/form2) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save form2
```

## Usage

```jsx

import React, { Component } from 'react'

import Form from 'form2'
import './App.css'

export default class App extends Component {
  render () {
    return (
      <div>
        <Form fields={
          [
            {
              type: 'text',
              name: 'username',
              placeholder: 'Type Username..',
              id: 'username',
              className: 'textField',
              onChange: (event) => { console.log(`VALUE IS: ${event.target.value}`) }
            },
            {
              type: 'text',
              name: 'password',
              placeholder: 'Type Password..',
              id: 'password',
              className: 'textField'
            }]
        } />
      </div>
    )
  }
}

```

## Field Types Supported
 - Text field
 
 ## Options
 Options can be added on the fields options:
 ```jsx
 const myFields = [{ OPTIONS_HERE_AS_OBJECT_PROPERTIES }];
```
and you should send the `myFields` array as a `fields` props on the form2 component
```jsx
<Form2 fields={myField} />
```

### The fields options by type:
 - #### Text: 
   - type: required, should be => 'text'
   - Any input props (e.g: className, id, key, disabled ...)
  
## License

MIT © [mhmdtshref](https://github.com/mhmdtshref)
