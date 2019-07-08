import React from 'react';
import renderer from 'react-test-renderer';
import DateTimePicker from "./index";

describe('Password Field Test', () => {

  it('is truthy', () => {
    expect(DateTimePicker).toBeTruthy()
  });

  it('Test natural date picker field', () => {
    const dateTimePicker = renderer.create(<DateTimePicker name="birthday" />).toJSON();
    expect(dateTimePicker).toMatchSnapshot();
  });

  it('Test date picker field with default value property', () => {
    const datePicker = renderer.create(<DateTimePicker name="birthday" value="1996-07-26" />).toJSON();
    expect(datePicker).toMatchSnapshot();
  });

  it('Test date picker field with onChange function', () => {
    const onChangeHandler = () => {
      // eslint-disable-next-line no-console
      console.log("Test console log!");
    };
    const dateTimePicker = renderer.create(<DateTimePicker name="birthday" onChange={onChangeHandler} />).toJSON();
    expect(dateTimePicker).toMatchSnapshot();
  });
});
