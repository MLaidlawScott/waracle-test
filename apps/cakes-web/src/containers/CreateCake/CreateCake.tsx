import { CreateCakeTemplate } from '../../templates/CreateCakeTemplate/CreateCakeTemplate';
import { Cake } from '@waracle-test/models';
import { useAddCakeMutation } from '../../services/cakes/cakesApi';

const CreateCake = () => {
  const [createCake] = useAddCakeMutation();

  const handleSubmit = (values: Omit<Cake, 'id'>) => {
    createCake(values);
  };

  return <CreateCakeTemplate onSubmit={handleSubmit} />;
};

export default CreateCake;
