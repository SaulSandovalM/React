import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CommentBox from './CommentBox';
import Clock from './CommentBox';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(
  <CommentBox/>,
  document.getElementById('perro')
);

ReactDOM.render(
  <Clock/>,
  document.getElementById('raat')
);
