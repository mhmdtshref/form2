import React, { Component } from 'react'

import Form from 'form2'

export default class App extends Component {
  getFields = () => {
    const fields = [
      {
        type: 'text',
        name: 'username',
        placeholder: 'Type Username..',
        id: 'username'
      },
      {
        type: 'text',
        name: 'password',
        placeholder: 'Type Password..',
        id: 'password'
      }]
    return fields
  };

  render () {
    return (
      <div>
        <Form fields={this.getFields()} />
      </div>
    )
  }
}
