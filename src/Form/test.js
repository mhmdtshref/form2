import React from 'react';
import { shallow } from 'enzyme';
import { Form, TextField, Button, DatePicker, PasswordField } from "../";

describe('Form Test', () => {

  it('is truthy', () => {
    expect(Form).toBeTruthy()
  });

  it('Form with one field in it', () => {
    const form = shallow(<Form>
      <TextField name="username" />
    </Form>);
    expect(form).toMatchSnapshot();
  });

  it('Form with multiple fields in it', () => {
    // eslint-disable-next-line no-console
    const onClickHandler = () => { console.log('Button has been clicked!') };
    const form = shallow(<Form>
      <TextField name="username" placeholder="Username"/>
      <PasswordField name="password" placeholder="email" />
      <DatePicker name="birthday" />
      <Button onClick={onClickHandler}/>
    </Form>);
    expect(form).toMatchSnapshot();
  });
});
