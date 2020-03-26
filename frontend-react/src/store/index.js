/* eslint-disable global-require */
/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from '~/modules/reducers';
import sagas from '~/modules/sagas';

const sagaMiddleware = createSagaMiddleware();

const reduxDevTools =
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

function configureStore() {
	const middlewares = [];
	middlewares.push(sagaMiddleware);
	if (process.env.NODE_ENV !== `production`) {
		const { logger } = require(`redux-logger`);

		middlewares.push(logger);
	}
	const enhancer = compose(applyMiddleware(...middlewares), reduxDevTools);
	const store = createStore(reducers, enhancer);
	if (process.env.NODE_ENV !== 'production' && module.hot) {
		module.hot.accept('../modules/reducers', () =>
			store.replaceReducer(reducers)
		);
	}
	return store;
}

const store = configureStore();

sagaMiddleware.run(sagas);

export default store;
