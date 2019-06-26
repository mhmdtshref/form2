import React from 'react';
import renderer from 'react-test-renderer';
import { Form, TextField, Button, DatePicker, PasswordField } from "../";

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
    // eslint-disable-next-line no-console
    const onClickHandler = () => { console.log('Button has been clicked!') };
    const form = renderer.create(<Form>
      <TextField name="username" placeholder="Username"/>
      <PasswordField name="password" placeholder="email" />
      <DatePicker name="birthday" />
      <Button onClick={onClickHandler}/>
    </Form>).toJSON();
    expect(form).toMatchSnapshot();
  });
});
