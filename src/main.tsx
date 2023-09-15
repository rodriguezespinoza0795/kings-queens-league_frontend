import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import App from './App.tsx';
import { apolloClient } from '../config';
import { ThemeConfig } from '../config/theme.config';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <ThemeConfig>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeConfig>
    </ApolloProvider>
  </React.StrictMode>,
);
