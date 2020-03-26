/* eslint-disable global-require */
/* eslint-disable react/no-render-return-value */
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core';
import { I18nextProvider } from 'react-i18next';

import i18n from './i18n';
import store from './store';
import theme from './theme';
import { history } from './services';

import App from './App';

const render = (Component) =>
	ReactDOM.render(
		<Provider store={store}>
			<I18nextProvider i18n={i18n}>
				<Router history={history}>
					<MuiThemeProvider theme={theme}>
						<Component />
					</MuiThemeProvider>
				</Router>
			</I18nextProvider>
		</Provider>,
		document.getElementById('root')
	);

render(App);

if (module.hot) {
	module.hot.accept('./App', () => {
		const NextApp = require('./App').default;
		render(NextApp);
	});
}
