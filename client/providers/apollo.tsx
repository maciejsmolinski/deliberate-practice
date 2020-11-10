import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

export default function withApollo<Props>(
  Component: React.ComponentType<Props>,
) {
  return (props: Props) => (
    <ApolloProvider client={client}>
      <Component {...props} />
    </ApolloProvider>
  );
}
