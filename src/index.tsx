import React from 'react';
import * as ReactDOM from 'react-dom';
import { Heading } from 'bumbag';
import Container from './components/Container';
import Board, { Status } from './components/Board';

const cards = [
  { title: 'Property-based testing', status: Status.CannotDo },
  { title: 'SProxy - Type level programming', status: Status.CannotDo },
  { title: 'Unit Tests', status: Status.CanDoWithEffort },
  { title: 'FFI', status: Status.Mastered },
  { title: 'JSON Encoding/Decoding', status: Status.Mastered },
];

function Main() {
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
