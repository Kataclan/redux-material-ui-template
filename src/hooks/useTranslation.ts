import { useContext } from 'react';
import { LanguageContext } from 'contexts';

const useTranslation = () => useContext(LanguageContext);

export default useTranslation;
