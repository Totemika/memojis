import React from 'react';
import ReactDOM from 'react-dom';
import Memojis from './Memojis';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Memojis />, div);
  ReactDOM.unmountComponentAtNode(div);
});
