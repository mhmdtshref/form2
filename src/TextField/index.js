import React, { Component } from 'react'

class TextField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  onChange = ({ target }) => {
    this.setState({ value: target.value });
  };

  render() {
    return <input value={this.state.value} onChange={this.onChange} {...this.props} />;
  }
}

export default TextField;
