import { Page } from 'components';
import { useFarms } from 'hooks';

function Farms() {
  const { loading, data, error } = useFarms();
  console.log(data);

  return <Page>{loading ? 'Loading' : JSON.stringify(data)}</Page>;
}

export default Farms;
