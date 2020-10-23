import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { fetchPlus2 } from './fetch';

function Main() {
  return <div>Main Component</div>;
}

fetchPlus2().run().promise().then(console.log);

ReactDOM.render(<Main />, document.getElementById('app'));
