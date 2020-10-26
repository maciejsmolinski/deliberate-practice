import { Board, Status } from './types';

const COLUMNS: Map<Status, string> = new Map([
  [Status.CannotDo, 'Cannot do'],
  [Status.CanDoWithEffort, 'Can do with effort'],
  [Status.Mastered, 'Mastered'],
]);

export function column(identifier: Status) {
  return COLUMNS.get(identifier);
}

export function empty(): Board {
  return new Map([
    [Status.CannotDo, []],
    [Status.CanDoWithEffort, []],
    [Status.Mastered, []],
  ]);
}
