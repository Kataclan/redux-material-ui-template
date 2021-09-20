import { Box, Grid, Divider, IconButton, Stack, Typography, Link } from '@mui/material';
import { ContentContainer } from 'components';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { PATHS } from 'routes/paths';
import { MediumIcon, GithubIcon, TelegramIcon, TwitterIcon, Logo } from '../../Svg';

const SOCIALS = [
  { name: 'Telegram', icon: TelegramIcon },
  { name: 'Twitter', icon: TwitterIcon },
  { name: 'Medium', icon: MediumIcon },
  { name: 'Github', icon: GithubIcon }
];

const LINKS = [
  {
    headline: 'SaferDoc',
    children: [
      { name: 'Farms', href: PATHS.farms.root },
      { name: 'Calendar', href: PATHS.calendar },
      { name: 'Info', href: PATHS.info.root },
      { name: 'Owners', href: PATHS.owners.root },
      { name: 'Contact', href: PATHS.contact }
    ]
  },
  {
    headline: 'Legal',
    children: [
      { name: 'Terms and Condition', href: '#' },
      { name: 'Privacy Policy', href: '#' }
    ]
  }
];

const MainFooter = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: (theme) => theme.palette.background.default
      }}
    >
      <Divider />
      <ContentContainer sx={{ pt: 8, pb: 8 }}>
        <Grid
          container
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ textAlign: { xs: 'center', md: 'left' } }}
        >
          <Grid item xs={12} sx={{ mb: 3 }}>
            <ScrollLink to="move_top" spy smooth>
              <Logo sx={{ mx: { xs: 'auto', md: 'inherit' } }} />
            </ScrollLink>
          </Grid>
          <Grid item xs={8} md={3}>
            <Typography variant="body2" sx={{ pr: { md: 5 } }}>
              Welcome to SaferDoc
            </Typography>
            <Stack
              spacing={1.5}
              direction="row"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{ mt: 5, mb: { xs: 5, md: 0 } }}
            >
              {SOCIALS.map((social) => (
                <IconButton key={social.name} color="primary" sx={{ p: 1 }}>
                  <social.icon width={16} height={16} />
                </IconButton>
              ))}
            </Stack>
          </Grid>
          <Grid item xs={12} md={7}>
            <Stack spacing={5} direction={{ xs: 'column', md: 'row' }} justifyContent="space-between">
              {LINKS.map((list) => {
                const { headline, children } = list;
                return (
                  <Stack key={headline} spacing={2}>
                    <Typography component="p" variant="overline">
                      {headline}
                    </Typography>
                    {children.map((link) => (
                      <Link
                        to={link.href}
                        key={link.name}
                        color="inherit"
                        variant="body2"
                        component={RouterLink}
                        sx={{ display: 'block' }}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </Stack>
                );
              })}
            </Stack>
          </Grid>
          <Typography
            component="p"
            variant="body2"
            sx={{
              mt: 10,
              pb: 5,
              fontSize: 13,
              textAlign: { xs: 'center', md: 'left' }
            }}
          >
            © 2021. All rights reserved
          </Typography>
        </Grid>
      </ContentContainer>
    </Box>
  );
};

export default MainFooter;
