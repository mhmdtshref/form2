import React from 'react';
import renderer from 'react-test-renderer';
import TextField from './index';

describe('Password Field Test', () => {

  it('is truthy', () => {
    expect(TextField).toBeTruthy()
  });

  it('Test natural text field', () => {
    const textField = renderer.create(<TextField name="username" />).toJSON();
    expect(textField).toMatchSnapshot();
  });

  it('Test text field with placeholder property', () => {
    const textField = renderer.create(<TextField name="username" placeholder="Type your name..." />).toJSON();
    expect(textField).toMatchSnapshot();
  });

  it('Test text field with onChange function property', () => {
    const onChangeHandler = () => {
      console.log("Test console log!");
    };
    const textField = renderer.create(<TextField name="username" onChange={onChangeHandler} />).toJSON();
    expect(textField).toMatchSnapshot();
  });
});
