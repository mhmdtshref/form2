import React, { Component } from 'react'

import { Form, TextField } from 'form2'
import './App.css'

export default class App extends Component {
  render () {
    return (
      <div>
        <Form>
          <TextField placeholder="Type your name..." name="x" />
          <TextField placeholder="Type your email..." name="y" />
        </Form>
      </div>
    )
  }
}
