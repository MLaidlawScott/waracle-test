import React from 'react';

import { Box, Heading, Center } from '../../atoms';

interface Props {
  title: string;
}

export const Header: React.FC<Props> = ({ title }) => {
  return (
    <Box p="3" w="100vw" bg="primary.400">
      <Center>
        <Heading size="xl">{title}</Heading>
      </Center>
    </Box>
  );
};

export default Header;
