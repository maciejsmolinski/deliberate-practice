import { useEffect, useState } from 'react';
import { empty, get } from '../../services/board';

export default function useBoard(initial = empty()) {
  const [board, setBoard] = useState(initial);

  useEffect(
    () => {
      get()
        .run()
        .promise()
        .then(setBoard);
    },
    [board],
  );

  return board;
}
