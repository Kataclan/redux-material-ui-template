import { Box, BoxProps } from '@mui/material';

const Flex = ({ children, ...other }: BoxProps) => (
  <Box display="flex" {...other}>
    {children}
  </Box>
);

export default Flex;
