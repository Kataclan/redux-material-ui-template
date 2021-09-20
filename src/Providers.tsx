import { FC } from 'react';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { DrawerContextProvider, LanguageProvider, SettingsProvider } from 'contexts';
import App from 'App';
import { client } from './graphql';

const Providers: FC = () => {
  return (
    <ApolloProvider client={client}>
      <HelmetProvider>
        <SettingsProvider>
          <LanguageProvider>
            <DrawerContextProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </DrawerContextProvider>
          </LanguageProvider>
        </SettingsProvider>
      </HelmetProvider>
    </ApolloProvider>
  );
};

export default Providers;
