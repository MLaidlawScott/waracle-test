import { useGetCakesQuery } from '../../services/cakes/cakesApi';
import { useHistory } from 'react-router-dom';
import HomePageTemplate from '../../templates/HomePageTemplate/HomePageTemplate';

const Home = () => {
  const { data, error, isLoading } = useGetCakesQuery();
  const history = useHistory();

  const handleCreateCake = () => {
    history.push('/create');
  };

  const handleCakeCardClick = (id: number) => {
    const cake = data?.find((cake) => cake.id === id);
    history.push('/details', cake);
  };

  return (
    <HomePageTemplate
      onClickCreateCake={handleCreateCake}
      data={data}
      isLoading={isLoading}
      error={!!error}
      onClickCakeCard={handleCakeCardClick}
    />
  );
};

export default Home;
