import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import DataProvider from './context/DataProvider';
import UserProvider from './context/UserProvider';
import {Auth0Provider} from '@auth0/auth0-react'

ReactDOM.render(
    <BrowserRouter> 
    <Auth0Provider
                domain="dev-g-pp69rc.us.auth0.com"
                clientId="6tZCVzOBO6QXHTgVBdwwspfU9volt90i"
                redirectUri={window.location.origin}>
        <DataProvider> 
              
            <UserProvider> 
                <App/> 
            </UserProvider> 
               
        </DataProvider> 
        </Auth0Provider>
    </BrowserRouter>,
    document.getElementById('root')
    )
