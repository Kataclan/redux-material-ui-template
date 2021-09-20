import { Language } from '@types';
import { ReactText } from 'react';

export type ContextData = {
  [key: string]: ReactText;
};

export interface ProviderState {
  isFetching: boolean;
  currentLanguage: Language;
}

export interface ContextApi extends ProviderState {
  setLanguage: (language: Language) => void;
  languages: any;
  languageList: Language[];
  t: (key: string, data?: ContextData) => string;
}
