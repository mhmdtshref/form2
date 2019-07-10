import React from 'react';
import TextField from './index';
import Form from '../Form';
import { render, mount } from 'enzyme';
import jestMock from 'jest-mock';

describe('Text Field Test', () => {

  it('is truthy', () => {
    expect(TextField).toBeTruthy()
  });


  it('Test natural text field', () => {
      const textField = render(
          <Form>
              <TextField name="username" />
          </Form>
      );
    expect(textField).toMatchSnapshot();
  });


  it('Test text field with placeholder property', () => {
    const textField = render(
        <Form>
            <TextField name="username" placeholder="Type your name..." />
        </Form>
    );
    expect(textField).toMatchSnapshot();
  });


  it('Test text field onChange', () => {
    const event = {
        target: { value: 'new value' }
    };

    const textField = mount(
        <Form>
            <TextField name="username" />
        </Form>
    );
    const input = textField.find('input').first();
    input.simulate('change', event);
  });


  it('Test text field with onChange function property', () => {
      const onChangeHandler = jestMock.fn();
      const event = {
          target: { value: 'new value' }
      };

      const textField = mount(
          <Form>
              <TextField name="username" onChange={onChangeHandler} />
          </Form>
      );
      textField.find('input').first().simulate('change', event);
      expect(onChangeHandler).toBeCalled();
  });

});
