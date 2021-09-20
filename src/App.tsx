import { Settings } from 'components';
import React from 'react';
import Router from 'routes';
import ThemeConfig from 'theme';

const App: React.FC = (): JSX.Element => {

  return (
    <ThemeConfig>
      <Settings />
      <Router />
    </ThemeConfig>
  );
};

export default App;
