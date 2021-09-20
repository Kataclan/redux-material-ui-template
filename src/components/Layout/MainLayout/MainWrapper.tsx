import { Box, styled } from '@mui/system';

const MainWrapper = styled(Box)(({ theme }) => ({
  height: '100%',
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11)
  }
}));

export default MainWrapper;
