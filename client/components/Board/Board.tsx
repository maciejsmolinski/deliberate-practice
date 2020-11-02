import React from 'react';
import { Heading, Columns, Stack } from 'bumbag';
import { getColumnName, fromInputBoard } from './utils';
import Card from '../Card';
import { Board } from '../../../types';

type BoardProps = {} & Board;

export default function Board({ cards = [] }: BoardProps) {
  const board = fromInputBoard({ cards });

  return (
    <Columns>
      {[...board].map(([status, items]) => {
        return (
          <Columns.Column key={status}>
            <Heading use="h5">{getColumnName(status)}</Heading>
            <Stack spacing="minor-1">
              {items.map(card => (
                <Card key={card} title={card} />
              ))}
            </Stack>
          </Columns.Column>
        );
      })}
    </Columns>
  );
}
