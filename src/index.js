import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* BrowserRouter con basename para GitHub Pages */}
    <BrowserRouter basename="/Avance-proyecto">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);