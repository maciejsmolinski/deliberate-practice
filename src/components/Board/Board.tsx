import React from 'react';
import { Group, Heading, Box, Avatar, Columns, Stack } from 'bumbag';
import { InputBoard, Board, Card } from './types';
import { getColumnName, fromInputBoard } from './utils';

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
              {items.map((card: Card) => (
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
            </Stack>
          </Columns.Column>
        );
      })}
    </Columns>
  );
}
