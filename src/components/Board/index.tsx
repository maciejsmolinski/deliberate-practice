import React from 'react';
import { Columns } from 'bumbag';

export default function Board() {
    return (
        <Columns>
            <Columns.Column>Can&apos;t do</Columns.Column>
            <Columns.Column>Can do with effort</Columns.Column>
            <Columns.Column>Mastered/Automated</Columns.Column>
        </Columns>
    );
}
