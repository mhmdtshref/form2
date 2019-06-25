import React from 'react';
import renderer from 'react-test-renderer';
import Form from './Form';
import TextField from "./TextField";

describe('Check form text field', () => {

  it('is truthy', () => {
    expect(Form).toBeTruthy()
  });

  it('Field of type text', () => {
    const form = renderer.create(<Form>
      <TextField name="username" />
      <TextField name="password" />
    </Form>).toJSON();
    expect(form).toMatchSnapshot();
  });

  it('Field of type text with placeholder in props', () => {
    const form = renderer.create(<Form>
      <TextField name="username" placeholder="Username"/>
      <TextField name="email" placeholder="email" />
    </Form>).toJSON();
    expect(form).toMatchSnapshot();
  });

  it('Field of type text with onChange function in the props ', () => {
    const form = renderer.create(<Form>
      <TextField name="username" onChange={() => { console.log("Hello1"); }} />
      <TextField name="password" onChange={() => { console.log("Hello2"); }} />
    </Form>).toJSON();
    expect(form).toMatchSnapshot();
  });

});
