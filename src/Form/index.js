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

  renderTextField = (field, index) => {
    field.key = field.key ? field.key : index
    if (field.onChange) {
      return <input
        type='text'
        name={field.name}
        onChange={(event) => { field.onChange(event); this.setEventToState(event) }}
        {...field}
      />
    } else {
      return <input
        type='text'
        name={field.name}
        onChange={this.setEventToState}
        {...field}
      />
    }
  }

  renderFields = (fields) => {
    return fields.map((field, index) => {
      switch (field.type) {
        case 'text':
          return this.renderTextField(field, index)
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
