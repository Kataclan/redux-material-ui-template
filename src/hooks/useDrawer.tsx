import { useContext } from 'react';
import { DrawerContext } from '../contexts';

const useDrawer = () => useContext(DrawerContext);

export default useDrawer;
