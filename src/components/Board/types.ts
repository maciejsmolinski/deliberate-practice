import { Skill } from '../../types';

export type Card = string;

export type Cards = Card[];

export type Board = Map<Skill.Category, Cards>;
