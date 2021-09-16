import { Cake } from '@waracle-test/models';
import { PageWithHeader } from '../PageWithHeader/PageWithHeader';
import {
  CakeDetailsCard,
  Box,
  Center,
  Button,
  Flex,
  Text,
} from '@waracle-test/web-component-library';

interface Props {
  cake: Cake;
  onDeleteCake: () => void;
  isDeleted: boolean;
}

export const CakeDetailsTemplate: React.FC<Props> = ({
  cake,
  onDeleteCake,
  isDeleted,
}) => {
  return (
    <PageWithHeader headerText={cake.name}>
      <Box p="3">
        <Center>
          <Flex flexDir="column">
            <CakeDetailsCard {...cake} />
            {!isDeleted ? (
              <Box p="2">
                <Center>
                  <Button variant="outline" onClick={onDeleteCake}>
                    Delete
                  </Button>
                </Center>
              </Box>
            ) : (
              <Text>Deleted</Text>
            )}
          </Flex>
        </Center>
      </Box>
    </PageWithHeader>
  );
};
