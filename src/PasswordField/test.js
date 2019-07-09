import React from 'react';
import { shallow } from 'enzyme';
import PasswordField from './index';
import Form from "../Form";

describe('Password Field Test', () => {

  it('is truthy', () => {
    expect(PasswordField).toBeTruthy()
  });

  it('Test natural password field', () => {
    const passwordField = shallow(
        <Form>
            <PasswordField name="password" />
        </Form>
    );
    expect(passwordField).toMatchSnapshot();
  });

  it('Test password field with placeholder property', () => {
    const passwordField = shallow(
        <Form>
            <PasswordField name="password" placeholder="Type your password..." />
        </Form>
    );
    expect(passwordField).toMatchSnapshot();
  });

  it('Test password field with onChange function', () => {
    const onChangeHandler = () => {
      // eslint-disable-next-line no-console
      console.log("Test console log!");
    };
    const passwordField = shallow(
        <Form>
            <PasswordField name="password" onChange={onChangeHandler} />
        </Form>
    );
    expect(passwordField).toMatchSnapshot();
  });
});
