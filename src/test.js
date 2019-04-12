import React from 'react';
import renderer from 'react-test-renderer';
import Form from './Form';

describe('Check form text field', () => {

  it('is truthy', () => {
    expect(Form).toBeTruthy()
  });

  it('Field of type text', () => {
    const form = renderer.create(<Form fields={[ { type: 'text', name: 'username' }, ]} />).toJSON();
    expect(form).toMatchSnapshot();
  });

  it('Field of type text with placeholder in props', () => {
    const form = renderer.create(<Form fields={[ { type: 'text', name: 'username', placeholder: 'Username here..' }, ]} />).toJSON();
    expect(form).toMatchSnapshot();
  });

  it('Field of type text with onChange function in the props ', () => {
    const form = renderer.create(<Form fields={[ { type: 'text', name: 'username', onChange: (values) => { console.log(values); } }, ]} />).toJSON();
    expect(form).toMatchSnapshot();
  });

});
