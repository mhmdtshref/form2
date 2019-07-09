import React from 'react';
import renderer from 'react-test-renderer';
import DatePicker from "./index";

describe('Password Field Test', () => {

  it('is truthy', () => {
    expect(DatePicker).toBeTruthy()
  });

  it('Test natural date picker field', () => {
    const datePicker = renderer.create(<DatePicker name="birthday" />).toJSON();
    expect(datePicker).toMatchSnapshot();
  });

  it('Test date picker field with default value property', () => {
    const datePciker = renderer.create(<DatePicker name="birthday" value="1996-07-26" />).toJSON();
    expect(datePciker).toMatchSnapshot();
  });

  it('Test date picker field with onChange function', () => {
    const onChangeHandler = () => {
      // eslint-disable-next-line no-console
      console.log("Test console log!");
    };
    const datePicker = renderer.create(<DatePicker name="birthday" onChange={onChangeHandler} />).toJSON();
    expect(datePicker).toMatchSnapshot();
  });
});