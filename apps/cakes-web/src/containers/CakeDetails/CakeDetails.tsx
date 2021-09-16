import { Cake } from '@waracle-test/models';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDeleteCakeMutation } from '../../services/cakes/cakesApi';

import { CakeDetailsTemplate } from '../../templates/CakeDetailsTemplate/CakeDetailsTemplate';

const CakeDetails: React.FC = () => {
  const history = useHistory<Cake>();
  const [deleteCake, { isSuccess }] = useDeleteCakeMutation();

  const cake = history.location.state;

  const handleDeleteCake = (id: number) => {
    deleteCake(id);
  };

  useEffect(() => {
    if (!history.location.state) {
      history.push('/');
    }
  }, [history]);

  return (
    <CakeDetailsTemplate
      onDeleteCake={() => handleDeleteCake(cake.id)}
      isDeleted={isSuccess}
      cake={cake as Cake}
    />
  );
};

export default CakeDetails;
