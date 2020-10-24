import React, { ReactChild } from 'react';
import {
  Provider as BumbagProvider,
  Container as BumbagContainer,
  Box,
} from 'bumbag';

type ContainerProps = {
  children: ReactChild;
};

export default function Container({ children }: ContainerProps) {
  return (
    <BumbagProvider>
      <BumbagContainer>
        <Box padding="1rem 0.5rem">{children}</Box>
      </BumbagContainer>
    </BumbagProvider>
  );
}
