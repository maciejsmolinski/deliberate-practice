import React from 'react';
import * as ReactDOM from 'react-dom';
import { Heading } from 'bumbag';
import Container from './components/Container';
import useMessage from './hooks/useMessage';

function Main() {
  const message = useMessage('Main Component');

  return (
    <Container>
      <Heading use="h3">{message}</Heading>
    </Container>
  );
}

ReactDOM.render(<Main />, document.getElementById('app'));
