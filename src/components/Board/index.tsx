import React from 'react';
import { Columns, Card as BumbagCard } from 'bumbag';
import { Board, Status, Card } from './types';
import { empty, column } from './board';

export { Status };

interface BoardCard {
  title: string;
  status: Status;
}

type BoardProps = {
  cards: BoardCard[];
};

export default function Board({ cards = [] }: BoardProps) {
  const board: Board = cards.reduce((map, card) => {
    const { title, status } = card;

    const bucket = map.get(status) || [];
    bucket.push(title);

    return map.set(status, bucket);
  }, empty());

  return (
    <Columns>
      {[...board].map(([status, cards]) => {
        return (
          <Columns.Column key={status}>
            {column(status)}
            {cards.map((card: Card) => (
              <BumbagCard key={card}>{card}</BumbagCard>
            ))}
          </Columns.Column>
        );
      })}
    </Columns>
  );
}
