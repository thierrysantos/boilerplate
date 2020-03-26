import { combineReducers } from 'redux';
import { importFiles } from '~/utils/importFiles';

const reducersContext = require.context('./', true, /\/reducer\.js/i);
const reducers = combineReducers(importFiles(reducersContext));

export default reducers;
