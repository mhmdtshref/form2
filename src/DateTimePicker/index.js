import React, { Component } from 'react'

class DateTimePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: (new Date()).toISOString(),
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

    render() {
    return <input type='datetime-local' value={this.state.value} onChange={this.onChange} {...this.generateProps(this.props)} />;
  }
}

export default DateTimePicker;
