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
              // eslint-disable-next-line no-console
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
