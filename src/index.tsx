import React, { useEffect, useState } from 'react';
import * as ReactDOM from 'react-dom';
import { delayed } from './task';
import { Heading, Box, Container, Provider as BumbagProvider } from 'bumbag';

function Main() {
  const [message, setMessage] = useState('Main Component!');
  useEffect(
    () => {
      delayed('Main Component!!', 3000)
        .run()
        .promise()
        .then(setMessage);
    },
    [message],
  );

  return (
    <BumbagProvider>
      <Container>
        <Box padding="1rem 0.5rem">
          <Heading use="h3">{message}</Heading>
        </Box>
      </Container>
    </BumbagProvider>
  );
}

ReactDOM.render(<Main />, document.getElementById('app'));
