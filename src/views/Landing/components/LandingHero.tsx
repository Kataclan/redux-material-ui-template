import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { styled, Button, Box, Container, Typography, Stack, StackProps } from '@mui/material';
import { PATHS } from '../../../routes/paths';
import {
  varFadeIn,
  varFadeInUp,
  varWrapEnter,
  varFadeInRight,
  BinanceIcon,
  OverlaySVG,
  PolygonIcon,
  FantomIcon,
  AvaxIcon,
  MobileHidden
} from 'components';

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center'
  }
}));

const ContentStyle = styled((props: StackProps) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  maxWidth: 520,
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left'
  }
}));

const HeroOverlayStyle = styled(OverlaySVG)({
  zIndex: 9,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute'
});

const HeroImgStyle = styled(motion.img)(({ theme }) => ({
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 8,
  margin: 'auto',
  position: 'absolute',
  height: '40vh',
  [theme.breakpoints.up('lg')]: {
    right: '20%',
    width: 'auto'
  }
}));

export default function LandingHero() {
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <motion.svg variants={varFadeIn}>
          <HeroOverlayStyle />
        </motion.svg>

        <MobileHidden width="mdDown">
          <HeroImgStyle alt="hero" src="/img/logo-512x512.png" variants={varFadeInUp} />
        </MobileHidden>

        <Container maxWidth="lg">
          <ContentStyle>
            <motion.div variants={varFadeInRight}>
              <Typography variant="h1" sx={{ color: 'common.white' }}>
                Welcome <br />
                to
                <Typography component="span" variant="h1" sx={{ color: 'primary.main' }}>
                  &nbsp;SaferDoc
                </Typography>
              </Typography>
            </motion.div>

            <Stack direction="row" spacing={4} justifyContent={{ xs: 'center', md: 'flex-start' }}>
              <motion.div variants={varFadeInRight}>
                <BinanceIcon width={48} height={48} />
              </motion.div>
              <motion.div variants={varFadeInRight}>
                <PolygonIcon width={48} height={48} />
              </motion.div>
              <motion.div variants={varFadeInRight}>
                <FantomIcon width={48} height={48} />
              </motion.div>
              <motion.div variants={varFadeInRight}>
                <AvaxIcon width={48} height={48} />
              </motion.div>
            </Stack>
            <motion.div variants={varFadeInRight}>
              <Typography sx={{ color: 'common.white' }}>Multi chain Farm listings and ratings.</Typography>
            </motion.div>

            <motion.div variants={varFadeInRight}>
              <Button size="large" variant="contained" component={RouterLink} to={PATHS.farms.root}>
                See farms
              </Button>
            </motion.div>
          </ContentStyle>
        </Container>
      </RootStyle>
      <Box sx={{ height: { md: '100vh' } }} />
    </>
  );
}
