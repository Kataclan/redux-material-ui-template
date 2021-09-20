import { Farm } from '@types';
import { axios } from 'utils';
import { store } from '..';
import { startLoading, getFarmsSuccess, hasError } from './farm';

export default function fetchFarms() {
  return async () => {
    const { dispatch } = store;
    dispatch(startLoading());
    try {
      const response: { data: { farms: Farm[] } } = await axios.get('https://safer-doc-api.vercel.app/api/farms');
      dispatch(getFarmsSuccess(response.data.farms));
    } catch (error) {
      dispatch(hasError(error));
    }
  };
}
