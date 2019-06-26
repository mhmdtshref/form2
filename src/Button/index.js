import React, { Component } from 'react'

class Button extends Component {
  constructor(props) {
    super(props);
  }

  generateProps = (props) => {
    let newProps = {...props};
    delete newProps.onChange;
    delete newProps.formstate;
    return newProps;
  };

  render() {
    return <button {...this.generateProps(this.props)}>{ this.props.children || this.props.value }</button>;
  }
}

export default Button;
