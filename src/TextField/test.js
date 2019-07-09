import React from 'react';
import renderer from 'react-test-renderer';
import TextField from './index';
import Form from '../Form';
import { shallow } from 'enzyme';


describe('Password Field Test', () => {

  it('is truthy', () => {
    expect(TextField).toBeTruthy()
  });

  it('Test natural text field', () => {
      const textField = shallow(
          <Form>
              <TextField name="username" />
          </Form>
      );
    expect(textField).toMatchSnapshot();
  });

  it('Test text field with placeholder property', () => {
    const textField = shallow(
        <Form>
            <TextField name="username" placeholder="Type your name..." />
        </Form>
    );
    expect(textField).toMatchSnapshot();
  });

  it('Test text field with onChange function property', () => {
    const onChangeHandler = () => {
      // eslint-disable-next-line no-console
      console.log("Test console log!");
    };
    const textField = shallow(
        <Form>
            <TextField name="username" onChange={onChangeHandler} />
        </Form>
    );
    expect(textField).toMatchSnapshot();
  });
});
