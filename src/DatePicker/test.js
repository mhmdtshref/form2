import React from 'react';
import DatePicker from "./index";
import Form from "../Form";
import { render, mount } from "enzyme/build";
import jestMock from 'jest-mock';

describe('Password Field Test', () => {

  it('is truthy', () => {
    expect(DatePicker).toBeTruthy()
  });


  it('Test natural date picker field', () => {
    const datePicker = render(
        <Form>
            <DatePicker name="birthday" value="1996-07-26T01:15" />
        </Form>
    );
    expect(datePicker).toMatchSnapshot();
  });


  it('Test date picker field with default value property', () => {
    const datePciker = render(
        <Form>
            <DatePicker name="birthday" value="1996-07-26T01:15" />
        </Form>
    );
    expect(datePciker).toMatchSnapshot();
  });


  it('Test date picker field onChange', () => {
      const event = {
          target: {
              value: '2019-07-20T18:10'
          }
      };

      const datePickerComponent = mount(
          <Form>
              <DatePicker name="birthday" value="1996-07-26T01:15" />
          </Form>
      );

      const datePicker = datePickerComponent.find('input').first();

      datePicker.simulate('change', event);
  });

  it('Test date picker field with onChange in property', () => {
      const event = {
          target: {
              value: '2019-07-20T18:10'
          }
      };
      const onChangeHandler = jestMock.fn();

      const datePickerComponent = mount(
          <Form>
              <DatePicker name="birthday" onChange={onChangeHandler} />
          </Form>
      );

      const datePicker = datePickerComponent.find('input').first();
      datePicker.simulate('change', event);

      expect(onChangeHandler).toBeCalled();
  });

});
