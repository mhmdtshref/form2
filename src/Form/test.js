import React from 'react';
import renderer from 'react-test-renderer';
import Form from './index';
import TextField from "../TextField/index";

describe('Form Test', () => {

  it('is truthy', () => {
    expect(Form).toBeTruthy()
  });

  it('Form with one field in it', () => {
    const form = renderer.create(<Form>
      <TextField name="username" />
    </Form>).toJSON();
    expect(form).toMatchSnapshot();
  });

  it('Form with multiple fields in it', () => {
    const form = renderer.create(<Form>
      <TextField name="username" placeholder="Username"/>
      <TextField name="email" placeholder="email" />
    </Form>).toJSON();
    expect(form).toMatchSnapshot();
  });
});
