import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { makeServer } from './Services/mirage';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const environment = process.env.NODE_ENV;

if (environment !== "production") {
  makeServer({ environment });
}
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
