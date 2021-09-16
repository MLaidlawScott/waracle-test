import {
  Box,
  Header,
  Center,
  Button,
} from '@waracle-test/web-component-library';

import { useGetCakesQuery } from '../../services/cakes/cakesApi';
import CakesList from '../../templates/CakesList/CakesList';

const Home = () => {
  const { data, error, isLoading } = useGetCakesQuery();
  console.log(data);
  return (
    <Box w="100vw" h="100vh" backgroundColor="secondary.100">
      <Header title="home" />
      <Center p="4">
        <Button variant="ghost">Add Cake</Button>
      </Center>
      <CakesList data={data} isLoading={isLoading} error={error} />
    </Box>
  );
};

export default Home;
