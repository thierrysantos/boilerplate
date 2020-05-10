import React from 'react';
import Routes from 'routes';
import GlobalStyle from 'theme/global';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';

import store from 'store';
import { history } from 'services';
import i18n from './i18n';

const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <Router history={history}>
            <GlobalStyle />
            <Routes />
          </Router>
        </I18nextProvider>
      </Provider>
    </>
  );
};

export default App;
