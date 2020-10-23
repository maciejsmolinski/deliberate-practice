import React, { useEffect, useState } from 'react';
import * as ReactDOM from 'react-dom';
import { delayed } from './task';

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

  return <div>{message}</div>;
}

ReactDOM.render(<Main />, document.getElementById('app'));
