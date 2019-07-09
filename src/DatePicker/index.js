import React, { Component } from 'react'

class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: (new Date()).toISOString().split('T')[0],
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
    delete newProps.value;
    return newProps;
  };

  componentDidMount() {
      this.props.formstate(this.props.name, this.state.value);
  }

  render() {
    return <input type='date' value={this.state.value} onChange={this.onChange} {...this.generateProps(this.props)} />;
  }
}

export default DatePicker;
