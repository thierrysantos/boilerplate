import { combineReducers } from 'redux';
import { importFiles } from 'utils/importFiles';
import requireContext from 'require-context.macro';

const reducersContext = requireContext('./', true, /\/reducer\.ts/i);
const reducers = combineReducers(importFiles(reducersContext));

export default reducers;
