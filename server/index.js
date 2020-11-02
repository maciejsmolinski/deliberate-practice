const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  enum Category {
    CannotDo
    CanDoWithEffort
    Mastered
  }

  type Card {
    title: String!
    status: Category!
  }

  type Board {
    cards: [Card!]
  }

  type Query {
    "Query to retrieve all deliberate practice exercises"
    board: Board
  }
`;

const resolvers = {
  Query: {
    board() {
      return {
        cards: [
          {
            status: 'CannotDo',
            title: 'Skill to learn',
          },
          { status: 'Mastered', title: 'Mastered skill' },
        ],
      };
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
