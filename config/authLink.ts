import { ApolloLink } from '@apollo/client';

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} as any }) => {
    const token = localStorage.getItem('token');

    if (token) headers.authorization = `Bearer ${token}`;

    return { headers };
  });

  return forward(operation);
});

export default authLink;
