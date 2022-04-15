import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import DataProvider from './context/DataProvider';
import UserProvider from './context/UserProvider';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BrowserRouter> <DataProvider> <UserProvider> <App/> </UserProvider>  </DataProvider> </BrowserRouter>)
