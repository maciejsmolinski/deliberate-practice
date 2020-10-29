import { Category } from '../../types';

export type Card = string;

export type Cards = Card[];

export type Board = Map<Category, Cards>;

interface InputCard {
  title: string;
  status: Category;
}

export type InputBoard = { cards: InputCard[] }
