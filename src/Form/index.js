import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {}
    }
  }

  setStateValue = (name, value) => {
    this.setState((prevState) => ({ values: {...prevState.values, [name]: value }}), () => {
      console.log("Submitted values are:", this.state);
    })
  };

  onSubmit = (event) => {
    event.target.values = this.state.values;
    this.props.onSubmit(event);
  };

  renderChildren = () => {
    const {setStateValue} = this;
    return React.Children.toArray(this.props.children).map((child, key) => React.cloneElement(child, {
      formstate: setStateValue,
      key
    }));
  };

  render() {
    return <form onSubmit={this.onSubmit}>
      {this.renderChildren()}
    </form>
  }
}
export default Form
