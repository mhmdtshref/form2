import React from 'react';
import renderer from 'react-test-renderer';
import Form from './index';
import TextField from "../TextField";
import PasswordField from "../PasswordField";
import DatePicker from '../DatePicker';

describe('Form Test', () => {

  it('is truthy', () => {
    expect(Form).toBeTruthy()
  });

  it('Form with one field in it', () => {
    const form = renderer.create(<Form>
      <TextField name="username" />
    </Form>).toJSON();
    expect(form).toMatchSnapshot();
  });

  it('Form with multiple fields in it', () => {
    const form = renderer.create(<Form>
      <TextField name="username" placeholder="Username"/>
      <PasswordField name="password" placeholder="email" />
      <DatePicker name="birthday" />
    </Form>).toJSON();
    expect(form).toMatchSnapshot();
  });
});
