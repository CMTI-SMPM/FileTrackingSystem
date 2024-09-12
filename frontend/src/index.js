import React from 'react';
import ReactDOM from 'react-dom/client'; // Ensure this import is from 'react-dom/client'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Create a root and render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optionally, you can keep the following line if you want to measure performance in your app
reportWebVitals();
