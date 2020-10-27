import { Board } from './types';
import { Skill } from '../../types';

const COLUMNS: Map<Skill.Category, string> = new Map([
  [Skill.Category.CannotDo, 'Cannot do'],
  [Skill.Category.CanDoWithEffort, 'Can do with effort'],
  [Skill.Category.Mastered, 'Mastered'],
]);

export function column(identifier: Skill.Category) {
  return COLUMNS.get(identifier);
}

export function empty(): Board {
  return new Map([
    [Skill.Category.CannotDo, []],
    [Skill.Category.CanDoWithEffort, []],
    [Skill.Category.Mastered, []],
  ]);
}
