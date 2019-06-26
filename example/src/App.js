import React, { Component } from 'react'

import { Form, TextField, PasswordField, DatePicker } from 'form2'
import './App.css'

export default class App extends Component {

  onSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted values are: ", event.target.values);
  };

  render () {
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <TextField placeholder="Type your name..." name="username" />
          <PasswordField placeholder="Type new password..." name="email" />
          <DatePicker name="birthday" />
          <button>my button</button>
        </Form>
      </div>
    )
  }
}
