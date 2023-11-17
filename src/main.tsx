import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import App from './App.tsx';
import { apolloClient } from '../config';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={apolloClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
);
