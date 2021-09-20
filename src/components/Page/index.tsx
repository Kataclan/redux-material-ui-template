import { forwardRef, ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router';
import { useTranslation } from 'hooks';
import { DEFAULT_META, getCustomMeta } from 'config/constants/meta';
import { Box, BoxProps } from '@mui/system';

interface PageProps extends BoxProps {
  children: ReactNode;
  title?: string;
}

const Page = forwardRef<HTMLDivElement, PageProps>(({ children, ...other }, ref) => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const pageMeta = getCustomMeta(pathname, t) || {};
  const { title, description, image } = { ...DEFAULT_META, ...pageMeta };

  return (
    <Box ref={ref} {...other}>
      <Helmet>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
      </Helmet>
      {children}
    </Box>
  );
});

export default Page;
