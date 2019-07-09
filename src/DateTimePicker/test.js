import React from 'react';
import { shallow } from 'enzyme';
import DateTimePicker from "./index";
import Form from "../Form";

describe('Password Field Test', () => {

  it('is truthy', () => {
    expect(DateTimePicker).toBeTruthy()
  });

  it('Test natural date picker field', () => {
    const dateTimePicker = shallow(
        <Form>
            <DateTimePicker name="birthday" value="1996-07-26" />
        </Form>
    );
    expect(dateTimePicker).toMatchSnapshot();
  });

  it('Test date picker field with default value property', () => {
    const dateTimePicker = shallow(
        <Form>
            <DateTimePicker name="birthday" value="1996-07-26" />
        </Form>
    );
    expect(dateTimePicker).toMatchSnapshot();
  });

  it('Test date picker field with onChange function', () => {
    const onChangeHandler = () => {
      // eslint-disable-next-line no-console
      console.log("Test console log!");
    };
    const dateTimePicker = shallow(
        <Form>
            <DateTimePicker name="birthday" onChange={onChangeHandler} value="1996-07-26" />
        </Form>
    );
    expect(dateTimePicker).toMatchSnapshot();
  });
});
