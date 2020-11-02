import { InputBoard, Board } from './types';
import { Category } from '../../../types';

const COLUMNS: Map<Category, string> = new Map([
  [Category.CannotDo, 'Cannot do'],
  [Category.CanDoWithEffort, 'Can do with effort'],
  [Category.Mastered, 'Mastered'],
]);

export function getColumnName(identifier: Category) {
  return COLUMNS.get(identifier);
}

function emptyBoard(): Board {
  return new Map([
    [Category.CannotDo, []],
    [Category.CanDoWithEffort, []],
    [Category.Mastered, []],
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
