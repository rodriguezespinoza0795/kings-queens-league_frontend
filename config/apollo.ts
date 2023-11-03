import { ApolloClient, InMemoryCache, from, HttpLink } from '@apollo/client';
import authLink from './authLink';

const httpLink = new HttpLink({
    uri: `${import.meta.env.VITE_API}graphql/`
})

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: from([authLink, httpLink])
});

export default client;
