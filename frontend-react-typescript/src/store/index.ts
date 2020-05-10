/* eslint-disable global-require */
/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from 'modules/reducers';
import sagas from 'modules/sagas';

const sagaMiddleware = createSagaMiddleware();

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function configureStore() {
  const middlewares = [];
  middlewares.push(sagaMiddleware);
  if (process.env.NODE_ENV !== `production`) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { logger } = require(`redux-logger`);

    middlewares.push(logger);
  }
  const enhancer = compose(applyMiddleware(...middlewares));
  const store = createStore(reducers, enhancer);

  return store;
}

const store = configureStore();

sagaMiddleware.run(sagas);

export default store;
