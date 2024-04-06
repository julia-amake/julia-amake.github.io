import React from 'react';
import ReactDOM from 'react-dom/client';
import 'src/app/styles/index.scss';
import 'src/shared/config/i18n/i18n';
import App from 'src/app/App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
