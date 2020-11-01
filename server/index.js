const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    "Query to retrieve all deliberate practice exercises"
    test: String
  }
`;

const resolvers = {
  Query: {
    test() {
      return 'Test';
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log('Server ready at ' + url);
});
