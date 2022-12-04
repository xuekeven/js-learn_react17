import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.scss';

import Demo from './demo';
import Hook from './hook';

const root = ReactDOM.createRoot((document.getElementById('root') as HTMLElement));
root.render(
  <React.StrictMode>
    {/* <Demo /> */}
    <Hook />
  </React.StrictMode>
);

reportWebVitals();