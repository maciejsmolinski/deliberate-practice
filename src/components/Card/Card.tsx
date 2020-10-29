import React from 'react';
import { Group, Box, Avatar } from 'bumbag';

type CardProps = { title: string };

export default function Card({ title }: CardProps) {
  return (
    <Group alignY="center" key={title}>
      <Box>
        <Avatar initials="PS" palette="primary" alt="PureScript" size="small" />
      </Box>
      <Box padding="0.5rem">{title}</Box>
    </Group>
  );
}
