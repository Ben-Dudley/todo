import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Todo from './containers/Todo.jsx';
import './css/index.css';

ReactDOM.render((
  <Provider store={store}>
    <Todo />
  </Provider>
), document.getElementById('root'));
