import React from 'react';
import { Columns, Card } from 'bumbag';

export default function Board() {
  return (
    <Columns>
      <Columns.Column>
        Can&apos;t do
        <Card>Property Based Testing</Card>
        <Card>SProxy - Type level programming</Card>
      </Columns.Column>
      <Columns.Column>
        Can do with effort
        <Card>Unit Tests</Card>
      </Columns.Column>
      <Columns.Column>
        Mastered/Automated
        <Card>FFI</Card>
        <Card>JSON Encoding/Decoding</Card>
      </Columns.Column>
    </Columns>
  );
}
