import React from 'react';
import * as ReactDOM from 'react-dom';
import { Heading } from 'bumbag';
import Container from './components/Container';
import Board from './components/Board';
import useBoard from './hooks/useBoard';

function Main() {
  const cards = useBoard();

  return (
    <Container>
      <>
        <Heading use="h3">Deliberate Practice</Heading>
        <Board cards={cards} />
      </>
    </Container>
  );
}

ReactDOM.render(<Main />, document.getElementById('app'));
