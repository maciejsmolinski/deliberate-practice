import React from 'react';
import * as ReactDOM from 'react-dom';
import { Heading, Stack } from 'bumbag';
import Container from './components/Container';
import Board from './components/Board';
import useBoard from './hooks/useBoard';

function Main() {
  const cards = useBoard();

  return (
    <Container>
      <Stack spacing="major-4">
        <Heading use="h3">Deliberate Practice</Heading>
        <Board cards={cards} />
      </Stack>
    </Container>
  );
}

ReactDOM.render(<Main />, document.getElementById('app'));
