import { InputBoard, Board } from './types';
import { Skill } from '../../types';

const COLUMNS: Map<Skill.Category, string> = new Map([
  [Skill.Category.CannotDo, 'Cannot do'],
  [Skill.Category.CanDoWithEffort, 'Can do with effort'],
  [Skill.Category.Mastered, 'Mastered'],
]);

export function getColumnName(identifier: Skill.Category) {
  return COLUMNS.get(identifier);
}

function emptyBoard(): Board {
  return new Map([
    [Skill.Category.CannotDo, []],
    [Skill.Category.CanDoWithEffort, []],
    [Skill.Category.Mastered, []],
  ]);
}

export function fromInputBoard({ cards = [] }: InputBoard): Board {
  return cards.reduce((map, card) => {
    const { title, status } = card;

    const bucket = map.get(status) || [];
    bucket.push(title);

    return map.set(status, bucket);
  }, emptyBoard());
}
