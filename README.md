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

import Form2 from 'form2'

export default class App extends Component {
  getFields = () => {
    const fields = [
      {
        type: 'text',
        name: 'username',
        placeholder: 'Type Username..',
        id: 'username'
      }]
    return fields
  };

  render () {
    return (
      <div>
        <Form2 fields={this.getFields()} />
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
   - placeholder: required, string
   - name: required, string
   - id: not required, string or number
  
## License

MIT © [mhmdtshref](https://github.com/mhmdtshref)
