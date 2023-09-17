import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ClientsContextProvider } from './context/ClientsContext'
import { UserContextProvider } from './context/UserContext'
import { ToDoContextProvider } from './context/ToDoContext'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClientsContextProvider>
      <UserContextProvider>
        <ToDoContextProvider>
          <App />
        </ToDoContextProvider>
      </UserContextProvider>
    </ClientsContextProvider>
  </React.StrictMode>
);


