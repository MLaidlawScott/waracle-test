import React from 'react';
import {
  CakeCard,
  Center,
  Flex,
  Spinner,
  Text,
  Button,
  Box,
} from '@waracle-test/web-component-library';
import { Cake } from '@waracle-test/models';
import { PageWithHeader } from '../PageWithHeader/PageWithHeader';

interface Props {
  data: Cake[] | undefined;
  error: boolean;
  isLoading: boolean;
  onClickCreateCake: () => void;
  onClickCakeCard: (id: number) => void;
}

const Base: React.FC = (props) => (
  <PageWithHeader headerText="home">
    <Center>{props.children}</Center>
  </PageWithHeader>
);

export const HomePageTemplate: React.FC<Props> = ({
  isLoading,
  data,
  error,
  onClickCreateCake,
  onClickCakeCard,
}) => {
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
      <Flex direction="column">
        <Center p="4">
          <Button variant="ghost" onClick={onClickCreateCake}>
            Add Cake
          </Button>
        </Center>
        <Center>
          <Flex flexWrap="wrap" justifyContent="center">
            {data?.map((cake) => (
              <Box p="1">
                <CakeCard
                  key={cake.id}
                  onClick={() => onClickCakeCard(cake.id)}
                  {...cake}
                />
              </Box>
            ))}
          </Flex>
        </Center>
      </Flex>
    </Base>
  );
};

export default HomePageTemplate;
