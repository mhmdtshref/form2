import React from 'react';
import renderer from 'react-test-renderer';
import PasswordField from './index';
import TextField from "../TextField";

describe('Password Field Test', () => {

  it('is truthy', () => {
    expect(PasswordField).toBeTruthy()
  });

  it('Test natural password field', () => {
    const passwordField = renderer.create(<PasswordField name="password" />).toJSON();
    expect(passwordField).toMatchSnapshot();
  });

  it('Test password field with placeholder property', () => {
    const passwordField = renderer.create(<TextField name="password" placeholder="Type your password..." />).toJSON();
    expect(passwordField).toMatchSnapshot();
  });

  it('Test password field with onChange function', () => {
    const onChangeHandler = () => {
      console.log("Test console log!");
    };
    const passwordField = renderer.create(<PasswordField name="password" onChange={onChangeHandler} />).toJSON();
    expect(passwordField).toMatchSnapshot();
  });
});
