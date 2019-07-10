import React from 'react';
import { render, mount } from 'enzyme';
import jestMock from 'jest-mock';
import PasswordField from './index';
import Form from "../Form";


describe('Password Field Test', () => {

  it('is truthy', () => {
    expect(PasswordField).toBeTruthy()
  });


  it('Test natural password field', () => {
    const passwordField = render(
        <Form>
            <PasswordField name="password" />
        </Form>
    );
    expect(passwordField).toMatchSnapshot();
  });


  it('Test password field with placeholder property', () => {
    const passwordField = render(
        <Form>
            <PasswordField name="password" placeholder="Type your password..." />
        </Form>
    );
    expect(passwordField).toMatchSnapshot();
  });


  it('Test password field onChange', () => {
      const event = {
          target: { value: 'new value' }
      };
      const passwordField = mount(
          <Form>
              <PasswordField name="password" />
          </Form>
      );
      const input = passwordField.find('input').first();
      input.simulate('change', event);
  });


  it('Test password field onChange', () => {
      const onChangeHandler = jestMock.fn();
      const event = {
          target: { value: 'new value' }
      };

      const passwordField = mount(
          <Form>
              <PasswordField name="password" onChange={onChangeHandler} />
          </Form>
      );

      const input = passwordField.find('input').first();
      input.simulate('change', event);

      expect(onChangeHandler).toBeCalled();
  });

});
