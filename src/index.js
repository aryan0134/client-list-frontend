import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ClientsContextProvider } from './context/ClientsContext'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClientsContextProvider>
      <App />
    </ClientsContextProvider>
  </React.StrictMode>
);


