import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      values: {}
    }
  }

  setStateValue = (name, value) => {
    this.setState((prevState) => ({...prevState.values, [name]: value}), () => {
      console.log("STATE CHANGED:::", this.state);
    })
  };

  setEventToState = ({ target }) => {
    this.setStateValue([target.name], target.value)
  };

  renderTextField = (field, index) => {
    field.key = field.key ? field.key : index;
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
  };

  renderFields = (fields) => {
    return fields.map((field, index) => {
      switch (field.type) {
        case 'text':
          return this.renderTextField(field, index)
      }
    })
  };


  renderChildren = () => {
    const { setStateValue } = this;
    return React.Children.toArray(this.props.children).map((child, key) => React.cloneElement(child, { formstate: setStateValue, key }));
  };

  render() {
    return <form>
      { this.renderChildren() }
    </form>
  }
}

export default Form
