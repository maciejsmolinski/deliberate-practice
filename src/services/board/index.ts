import { delayed, ITask } from '../../utils/task';
import { Status } from '../../components/board';

type BoardCard = {
  title: string;
  status: Status;
};

type Board = BoardCard[];

const BOARD = [
  { title: 'Property-based testing', status: Status.CannotDo },
  { title: 'SProxy - Type level programming', status: Status.CannotDo },
  { title: 'Unit Tests', status: Status.CanDoWithEffort },
  { title: 'FFI', status: Status.Mastered },
  { title: 'JSON Encoding/Decoding', status: Status.Mastered },
];

export function empty(): Board {
  return [];
}

export function get(): ITask<Board> {
  return delayed(BOARD, 1200);
}
