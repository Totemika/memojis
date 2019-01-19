import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import Memojis from './Components/Memojis/Memojis';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Memojis />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
