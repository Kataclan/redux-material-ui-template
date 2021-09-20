import { styled } from '@mui/system';
import { Page } from 'components';
import LandingHero from './components/LandingHero';

const PageWrapper = styled(Page)(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default
}));

function Landing() {
  return (
    <PageWrapper>
      <LandingHero />
      {/* <ContentContainer>
        <Typography>Landing</Typography>
      </ContentContainer> */}
    </PageWrapper>
  );
}

export default Landing;
