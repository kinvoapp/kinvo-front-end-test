import { mount } from 'enzyme';
import React from 'react';
import App from './App'
import { BrowserRouter } from 'react-router-dom'
window.scrollTo = jest.fn();

test('mounts component properly', () => {
    const component = mount(
      <BrowserRouter>
        <App/>
      </BrowserRouter>,
    );
    expect(component).toMatchSnapshot();
    component.unmount()
});