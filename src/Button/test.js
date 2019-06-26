import React from 'react';
import renderer from 'react-test-renderer';
import Button from './index';

describe('Button Field Test', () => {

  it('is truthy', () => {
    expect(Button).toBeTruthy()
  });

  it('Test natural button', () => {
    const button = renderer.create(<Button name="button" />).toJSON();
    expect(button).toMatchSnapshot();
  });

  it('Test button with value using value property', () => {
    const button = renderer.create(<Button name="button" value="Click me!" />).toJSON();
    expect(button).toMatchSnapshot();
  });

  it('Test button with value using inner text value', () => {
    const button = renderer.create(<Button name="button">Click me!</Button>).toJSON();
    expect(button).toMatchSnapshot();
  });

  it('Test button with onClick function property', () => {
    const onClickHandler = () => {
      // eslint-disable-next-line no-console
      console.log("Test console log!");
    };
    const button = renderer.create(<Button name="button" onClick={onClickHandler} />).toJSON();
    expect(button).toMatchSnapshot();
  });
});
