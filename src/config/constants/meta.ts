import { PageMeta } from './types';

export const DEFAULT_META: PageMeta = {
  title: 'SaferDoc',
  description: 'Your safer doctor',
  image: '/img/logo-192x192.png'
};

export const getCustomMeta = (path: string, t: any): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('SaferDoc')} | ${t('Home')}`
      };
    default:
      return null;
  }
};
