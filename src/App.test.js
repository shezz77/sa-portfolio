import React from 'react';
import ReactDOM from 'react-dom';
import About from './views/home';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<About />, div);

  expect(div.innerHTML).toContain('Let me introduce myself.');

  ReactDOM.unmountComponentAtNode(div);
});
