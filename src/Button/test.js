import React from 'react';
import { shallow } from 'enzyme';
import Button from './index';

describe('Button Field Test', () => {

  it('is truthy', () => {
    expect(Button).toBeTruthy()
  });

  it('Test natural button', () => {
    const button = shallow(<Button name="button" />);
    expect(button).toMatchSnapshot();
  });

  it('Test button with value using value property', () => {
    const button = shallow(<Button name="button" value="Click me!" />);
    expect(button).toMatchSnapshot();
  });

  it('Test button with value using inner text value', () => {
    const button = shallow(<Button name="button">Click me!</Button>);
    expect(button).toMatchSnapshot();
  });

  it('Test button with onClick function property', () => {
    const onClickHandler = () => {
      // eslint-disable-next-line no-console
      console.log("Test console log!");
    };
    const button = shallow(<Button name="button" onClick={onClickHandler} />);
    expect(button).toMatchSnapshot();
  });
});
