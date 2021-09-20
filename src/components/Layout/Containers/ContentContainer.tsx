import { Container, ContainerProps } from '@mui/material';

const ContentContainer = ({ children, maxWidth = 'lg', ...other }: ContainerProps) => (
  <Container maxWidth={maxWidth} {...other}>
    {children}
  </Container>
);

export default ContentContainer;
