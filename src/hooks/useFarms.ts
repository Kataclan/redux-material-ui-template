import { useQuery } from '@apollo/client';
import { GET_FARMS } from 'graphql/queries';

const useFarms = () => {
  const { loading, error, data } = useQuery(GET_FARMS);
  return { loading, error, data };
};

export default useFarms;
