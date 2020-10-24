import React from 'react';
import * as ReactDOM from 'react-dom';
import { Heading } from 'bumbag';
import Container from './components/Container';
import Board from './components/Board';

function Main() {
    return (
        <Container>
            <>
                <Heading use="h3">Deliberate Practice</Heading>
                <Board />
            </>
        </Container>
    );
}

ReactDOM.render(<Main />, document.getElementById('app'));
