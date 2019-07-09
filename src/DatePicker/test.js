import React from 'react';
import renderer from 'react-test-renderer';
import DatePicker from "./index";
import Form from "../Form";
import {shallow} from "enzyme/build";

describe('Password Field Test', () => {

  it('is truthy', () => {
    expect(DatePicker).toBeTruthy()
  });

  it('Test natural date picker field', () => {
    const datePicker = shallow(
        <Form>
            <DatePicker name="birthday" value="1996-07-26T01:15" />
        </Form>
    );
    expect(datePicker).toMatchSnapshot();
  });

  it('Test date picker field with default value property', () => {
    const datePciker = shallow(
        <Form>
            <DatePicker name="birthday" value="1996-07-26T01:15" />
        </Form>
    );
    expect(datePciker).toMatchSnapshot();
  });

  it('Test date picker field with onChange function', () => {
    const onChangeHandler = () => {
      // eslint-disable-next-line no-console
      console.log("Test console log!");
    };
    const datePicker = shallow(
        <Form>
            <DatePicker name="birthday" onChange={onChangeHandler} value="1996-07-26T01:15" />
        </Form>
    );
    expect(datePicker).toMatchSnapshot();
  });
});
