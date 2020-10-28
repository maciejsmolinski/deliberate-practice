import React from 'react';
import { Group, Box, Avatar, Columns } from 'bumbag';
import { Board, Card } from './types';
import { Skill } from '../../types';
import { empty, column } from './board';

interface BoardCard {
  title: string;
  status: Skill.Category;
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
              <Group alignY="center" key={card}>
                <Box>
                  <Avatar
                    initials="PS"
                    palette="primary"
                    alt="PureScript"
                    size="small"
                  />
                </Box>
                <Box padding="0.5rem">{card}</Box>
              </Group>
            ))}
          </Columns.Column>
        );
      })}
    </Columns>
  );
}
