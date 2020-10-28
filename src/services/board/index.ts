import { delayed, ITask } from '../../utils/task';
import { Skill } from '../../types';

type BoardCard = {
  title: string;
  status: Skill.Category;
};

type Board = BoardCard[];

const BOARD = [
  { title: 'Property-based testing', status: Skill.Category.CannotDo },
  { title: 'SProxy - Type level programming', status: Skill.Category.CannotDo },
  { title: 'Unit Tests', status: Skill.Category.CanDoWithEffort },
  { title: 'FFI', status: Skill.Category.Mastered },
  { title: 'JSON Encoding/Decoding', status: Skill.Category.Mastered },
];

export function empty(): Board {
  return [];
}

export function get(): ITask<Board> {
  return delayed(BOARD, 0);
}
