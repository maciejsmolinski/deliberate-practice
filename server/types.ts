import { Category } from '../types';

export type Card = { title: string; status: Category };

export type Board = { cards: Card[] };
