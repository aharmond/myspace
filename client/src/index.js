import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { initMiddleware, } from 'devise-axios';
import { BrowserRouter, } from 'react-router-dom';
import { AuthProvider, } from './providers/AuthProvider';
import { ProfileProvider, } from './providers/ProfileProvider';
import 'semantic-ui-css/semantic.min.css';

initMiddleware();

ReactDOM.render(
  <AuthProvider>
    <ProfileProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProfileProvider>
  </AuthProvider>,
  document.getElementById('root')
);

