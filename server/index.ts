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
          { status: Category.CannotDo, title: 'Skill to learn' },
          { status: Category.CanDoWithEffort, title: 'Skill being learned' },
          { status: Category.Mastered, title: 'Mastered skill' },
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
