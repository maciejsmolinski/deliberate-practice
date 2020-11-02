export enum Category {
  CannotDo = 'CannotDo',
  CanDoWithEffort = 'CanDoWithEffort',
  Mastered = 'Mastered',
}

export type Card = { title: string; status: Category };

export type Cards = Card[];

export type Board = { cards: Cards };
