import React from 'react';
import { Heading, Columns, Stack } from 'bumbag';
import { InputBoard, Board, Card as CardType } from './types';
import { getColumnName, fromInputBoard } from './utils';
import Card from '../Card';

type BoardProps = {} & InputBoard;

export default function Board({ cards = [] }: BoardProps) {
  const board: Board = fromInputBoard({ cards });

  return (
    <Columns>
      {[...board].map(([status, items]) => {
        return (
          <Columns.Column key={status}>
            <Heading use="h5">{getColumnName(status)}</Heading>
            <Stack spacing="minor-1">
              {items.map((card: CardType) => (
                <Card key={card} title={card} />
              ))}
            </Stack>
          </Columns.Column>
        );
      })}
    </Columns>
  );
}
