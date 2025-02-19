// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Agrega un console.log para confirmar que se ejecuta
console.log('Iniciando la aplicación...');

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error("No se encontró el elemento con id 'root'.");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
