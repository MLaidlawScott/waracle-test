import { Cake } from '@waracle-test/models';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { CakeDetailsTemplate } from '../../templates/CakeDetailsTemplate/CakeDetailsTemplate';

const CakeDetails: React.FC = () => {
  const history = useHistory();

  const cake = history.location.state || null;

  useEffect(() => {
    if (!history.location.state) {
      history.push('/');
    }
  }, [history]);

  return cake ? <CakeDetailsTemplate cake={cake as Cake} /> : <></>;
};

export default CakeDetails;
