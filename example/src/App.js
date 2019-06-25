import React, { Component } from 'react'

import { Form, TextField } from 'form2'
import './App.css'

export default class App extends Component {

  onSubmit = (event) => {
    event.preventDefault();
    console.log("THIS IS VALUES: ", event.target.values);
  };

  render () {
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <TextField placeholder="Type your name..." name="username" />
          <TextField placeholder="Type your email..." name="email" />
          <button>my button</button>
        </Form>
      </div>
    )
  }
}
