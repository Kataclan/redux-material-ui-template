import { Outlet } from 'react-router-dom';

import MainFooter from './MainFooter';
import MainNavbar from './MainNavbar';
import MainWrapper from './MainWrapper';

export default function MainLayout() {
  return (
    <>
      <MainNavbar />
      <MainWrapper>
        <Outlet />
      </MainWrapper>
      <MainFooter />
    </>
  );
}
