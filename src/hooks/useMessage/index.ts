import { useEffect, useState } from 'react';
import { delayed } from '../../task';

export default function useMessage(initial = '') {
  const [message, setMessage] = useState(initial);

  useEffect(
    () => {
      delayed(`${initial}!`, 3000)
        .run()
        .promise()
        .then(setMessage);
    },
    [message],
  );

  return message;
}
