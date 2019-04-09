import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      values: {}
    }
  };

  setStateValue = (name, value) => {
    this.setState((prevState) => ({...prevState.values, [name]: value}))
  };

  setEventToState = ({ target }) => {
    this.setStateValue([target.name], target.value)
  };

  renderTextField = (field) => {
    return <input
      // Required props:
      type='text'
      name={field.name}
      {...field}
      onChange={this.setEventToState}
    />
  }

  renderFields = (fields) => {
    return fields.map((field) => {
      switch (field.type) {
        case 'text':
          return this.renderTextField(field)
      }
    })
  };

  render() {
    return <form>
      {this.renderFields(this.props.fields)}
    </form>
  }
};

export default Form
