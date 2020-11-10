import { ApolloServer, gql } from 'apollo-server';
import { Category, Board } from '../types';

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
    board(): Board {
      return {
        cards: [
          { title: 'Property-based testing', status: Category.CannotDo },
          {
            title: 'SProxy - Type level programming',
            status: Category.CannotDo,
          },
          { title: 'Unit Tests', status: Category.CanDoWithEffort },
          { title: 'FFI', status: Category.Mastered },
          { title: 'JSON Encoding/Decoding', status: Category.Mastered },
        ],
      };
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }: { url: string }) => {
  /* tslint:disable-next-line no-console */
  console.log('Server ready at ' + url);
});
