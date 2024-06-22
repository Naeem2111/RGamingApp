import React from 'react';
import './assets/index.css';
import App from './App';
import Auth0ProviderWithHistory from './auth0Provider';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>
  </Router>,
  document.getElementById('root')
);