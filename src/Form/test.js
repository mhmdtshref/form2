import React from 'react';
import { render, mount } from 'enzyme';
import jestMock from 'jest-mock';
import { Form, TextField, Button, DatePicker, PasswordField } from "../";

describe('Form Test', () => {

  it('is truthy', () => {
    expect(Form).toBeTruthy()
  });

  it('Form with one field in it', () => {
    const form = render(<Form>
      <TextField name="username" />
    </Form>);
    expect(form).toMatchSnapshot();
  });

  it('Form with multiple fields in it', () => {
    // eslint-disable-next-line no-console
    const onClickHandler = () => { console.log('Button has been clicked!') };
    const form = render(
        <Form>
            <TextField name="username" placeholder="Username"/>
            <PasswordField name="password" placeholder="email" />
            <DatePicker name="birthday" />
            <Button onClick={onClickHandler}/>
        </Form>
    );

    expect(form).toMatchSnapshot();
  });

    it('Form on submit', () => {

        const onSubmitHandler = jestMock.fn();

        const formComponent = mount(
            <Form onSubmit={onSubmitHandler}>
                <TextField name="username" placeholder="Username"/>
                <PasswordField name="password" placeholder="email" />
                <DatePicker name="birthday" />
                <Button />
            </Form>
        );

        const form = formComponent.find('form').first();
        form.simulate('submit');

        expect(onSubmitHandler).toBeCalled();
    });

});
