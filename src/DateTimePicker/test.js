import React from 'react';
import { render, mount } from 'enzyme';
import jestMock from 'jest-mock';
import DateTimePicker from "./index";
import Form from "../Form";

describe('Password Field Test', () => {

  it('is truthy', () => {
    expect(DateTimePicker).toBeTruthy()
  });


  it('Test natural date picker field', () => {
    const dateTimePicker = render(
        <Form>
            <DateTimePicker name="birthday" value="1996-07-26" />
        </Form>
    );
    expect(dateTimePicker).toMatchSnapshot();
  });


  it('Test date picker field with default value property', () => {
    const dateTimePicker = render(
        <Form>
            <DateTimePicker name="birthday" value="1996-07-26" />
        </Form>
    );
    expect(dateTimePicker).toMatchSnapshot();
  });


  it('Test date picker field onChange', () => {
    const event = {
        target: {
            value: '2019-07-05'
        }
    };

    const dateTimePickerComponent = mount(
        <Form>
            <DateTimePicker name="birthday" value="1996-07-26" />
        </Form>
    );

    const dateTimePicker = dateTimePickerComponent.find('input').first();
    dateTimePicker.simulate('change', event);
  });


  it('Test date picker field with on onChange in properties', () => {
        const onChangeHandler = jestMock.fn();
        const event = {
            target: {
                value: '2019-07-05'
            }
        };

        const dateTimePickerComponent = mount(
            <Form>
                <DateTimePicker name="birthday" onChange={onChangeHandler} />
            </Form>
        );

        const dateTimePicker = dateTimePickerComponent.find('input').first();
        dateTimePicker.simulate('change', event);

        expect(onChangeHandler).toBeCalled();
    });

});
