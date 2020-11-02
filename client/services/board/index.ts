import { delayed, Task } from '../../utils/task';
import { Category } from '../../../types';

type BoardCard = {
  title: string;
  status: Category;
};

type Board = BoardCard[];

const BOARD = [
  { title: 'Property-based testing', status: Category.CannotDo },
  { title: 'SProxy - Type level programming', status: Category.CannotDo },
  { title: 'Unit Tests', status: Category.CanDoWithEffort },
  { title: 'FFI', status: Category.Mastered },
  { title: 'JSON Encoding/Decoding', status: Category.Mastered },
];

export function empty(): Board {
  return [];
}

export function get(): Task<Board> {
  return delayed(BOARD, 0);
}
