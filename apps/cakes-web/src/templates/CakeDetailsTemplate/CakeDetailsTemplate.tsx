import { Cake } from '@waracle-test/models';
import { PageWithHeader } from '../PageWithHeader/PageWithHeader';
import {
  CakeDetailsCard,
  Box,
  Center,
} from '@waracle-test/web-component-library';

interface Props {
  cake: Cake;
}

export const CakeDetailsTemplate: React.FC<Props> = ({ cake }) => {
  return (
    <PageWithHeader headerText={cake.name}>
      <Box p="3">
        <Center>
          <CakeDetailsCard {...cake} />
        </Center>
      </Box>
    </PageWithHeader>
  );
};
