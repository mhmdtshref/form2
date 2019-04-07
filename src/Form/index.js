import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      values: {}
    };
  };

  setStateValue = (name, value) => {
    this.setState((prevState) => ({...prevState.values, [name]: value}))
  };

  setEventToState = ({ target }) => {
    this.setStateValue([target.name], target.value);
  };

  renderFields = (fields) => {
    return fields.map((field) => {
      switch (field.type) {
        case 'text':
          return <input type='text' key={field.name} name={field.name} placeholder={field.placeholder} id={field.id ? field.id : ''} onChange={this.setEventToState} />
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
