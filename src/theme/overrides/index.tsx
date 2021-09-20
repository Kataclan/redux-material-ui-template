import SvgIcon from './SvgIcon';
import { merge } from 'lodash';
import { Theme } from '@mui/material';

export default function ComponentsOverrides(theme: Theme) {
  return merge(SvgIcon);
}
