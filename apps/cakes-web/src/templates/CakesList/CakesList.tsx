import {
  Box,
  CakeCard,
  Center,
  Flex,
  Spinner,
  Text,
} from '@waracle-test/web-component-library';
import { Cake } from '@waracle-test/models';
import React from 'react';

interface Props {
  data: Cake[] | undefined;
  error: any;
  isLoading: boolean;
}

const Base: React.FC = (props) => (
  <Box p="6">
    <Center>{props.children}</Center>
  </Box>
);

export const CakesList: React.FC<Props> = ({ isLoading, data, error }) => {
  if (isLoading) {
    return (
      <Base>
        <Spinner />
      </Base>
    );
  }

  if (error) {
    return (
      <Base>
        <Text>Something went wrong</Text>
      </Base>
    );
  }

  return (
    <Base>
      <Flex>
        {data?.map((cake) => (
          <CakeCard key={cake.id} {...cake} />
        ))}
      </Flex>
    </Base>
  );
};

export default CakesList;
