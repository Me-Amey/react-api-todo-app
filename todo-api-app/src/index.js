import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'; // Optional: if you want global styles
import App from './App';

// Selecting the 'root' div from your public/index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);