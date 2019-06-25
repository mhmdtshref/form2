import React, { Component } from 'react'

class TextField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  onChange = ({ target }) => {
    this.setState({ value: target.value }, () => {
      this.props.formstate(this.props.name, this.state.value);
      if(this.props.onChange) this.props.onChange();
    });
  };

  generateProps = (props) => {
    let newProps = {...props};
    delete newProps.onChange;
    delete newProps.formstate;
    return newProps;
  };

  render() {
    return <input value={this.state.value} onChange={this.onChange} {...this.generateProps(this.props)} />;
  }
}

export default TextField;