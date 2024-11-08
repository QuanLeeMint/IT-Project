import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/style.scss';
import RouterCustom from './router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterCustom />
  </React.StrictMode>
);
