import React from 'react';
import { Box, styled } from '@mui/system';

const PageLoaderWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageLoader: React.FC = ({ children }) => {
  return <PageLoaderWrapper>LOADING</PageLoaderWrapper>;
};

export default PageLoader;
