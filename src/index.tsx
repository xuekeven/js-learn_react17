import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import TicTacToe from './demo/TicTacToe';
import ToDos from './demo/todos';
import ReduxTree from './demo/redux-tree';
import ReduxToDos from './demo/redux-todos/';
import ReduxDragTree from './demo/redux-dragTree';

const root = ReactDOM.createRoot((document.getElementById('root') as HTMLElement));
root.render(
  <React.StrictMode>
    <TicTacToe />
    <ToDos />
    <ReduxTree />
    <ReduxToDos />
    <ReduxDragTree />
  </React.StrictMode>
);

reportWebVitals();