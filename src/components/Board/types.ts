export enum Status {
  CannotDo,
  CanDoWithEffort,
  Mastered,
}

export type Card = string;

export type Cards = Card[];

export type Board = Map<Status, Cards>;
