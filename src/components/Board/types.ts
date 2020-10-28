import { Skill } from '../../types';

export type Card = string;

export type Cards = Card[];

export type Board = Map<Skill.Category, Cards>;

interface InputCard {
  title: string;
  status: Skill.Category;
}

export type InputBoard = { cards: InputCard[] }
