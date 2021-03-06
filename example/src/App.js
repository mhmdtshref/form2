import React, { Component } from 'react'

import { Form, TextField, PasswordField, DatePicker, Button, DateTimePicker, } from 'form2'
import './App.css'

export default class App extends Component {

  onSubmit = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log("Submitted values are: ", event.target.values);
  };

  render () {
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <TextField placeholder="Type your name..." name="username" />
          <PasswordField placeholder="Type new password..." name="password" />
          <DatePicker name="birthday" />
          <DateTimePicker name="meetingTime" />
          <Button value="Submit" />
        </Form>
      </div>
    )
  }
}
