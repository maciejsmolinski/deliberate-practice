import { delayed, Task } from '../../utils/task';
import { Category, Cards } from '../../../types';

const BOARD: Cards = [
  { title: 'Property-based testing', status: Category.CannotDo },
  { title: 'SProxy - Type level programming', status: Category.CannotDo },
  { title: 'Unit Tests', status: Category.CanDoWithEffort },
  { title: 'FFI', status: Category.Mastered },
  { title: 'JSON Encoding/Decoding', status: Category.Mastered },
];

export function empty(): Cards {
  return [];
}

export function get(): Task<Cards> {
  return delayed(BOARD, 0);
}
