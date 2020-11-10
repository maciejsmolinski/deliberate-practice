import { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Cards } from '../../../types';

const BOARD_QUERY = gql`
  query GetBoard {
    board {
      cards {
        title
        status
      }
    }
  }
`;

const empty = (): Cards => [];

export default function useBoard(initial = empty()) {
  const { loading, error, data } = useQuery(BOARD_QUERY);
  const [board, setBoard] = useState(initial);

  useEffect(
    () => {
      if (data) {
        setBoard(data.board.cards);
      }
      if (error) {
        setBoard(initial);
      }
    },
    [loading],
  );

  return board;
}
