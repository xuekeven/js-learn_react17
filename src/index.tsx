import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import PageView from './page-view';

const root = ReactDOM.createRoot((document.getElementById('root') as HTMLElement));
root.render(
  <React.StrictMode>
    <PageView />
  </React.StrictMode>
);

reportWebVitals();