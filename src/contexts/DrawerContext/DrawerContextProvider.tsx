import { useMediaQuery, useTheme } from '@mui/material';
import { ReactNode, createContext, useState, useEffect } from 'react';
import { DrawerContextProps } from './types';

const initialState: DrawerContextProps = {
  collapseClick: false,
  collapseHover: false,
  onToggleCollapse: () => {},
  onHoverEnter: () => {},
  onHoverLeave: () => {}
};

type DrawerContextProviderProps = {
  children: ReactNode;
};

export function DrawerContextProvider({ children }: DrawerContextProviderProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const [collapse, setCollapse] = useState({
    click: false,
    hover: false
  });

  useEffect(() => {
    if (isMobile) {
      setCollapse({
        click: false,
        hover: false
      });
    }
  }, [isMobile]);

  const handleToggleCollapse = () => {
    setCollapse({ ...collapse, click: !collapse.click });
  };

  const handleHoverEnter = () => {
    if (collapse.click) {
      setCollapse({ ...collapse, hover: true });
    }
  };

  const handleHoverLeave = () => {
    setCollapse({ ...collapse, hover: false });
  };

  return (
    <DrawerContext.Provider
      value={{
        isCollapse: collapse.click && !collapse.hover,
        collapseClick: collapse.click,
        collapseHover: collapse.hover,
        onToggleCollapse: handleToggleCollapse,
        onHoverEnter: handleHoverEnter,
        onHoverLeave: handleHoverLeave
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
}

export const DrawerContext = createContext(initialState);
