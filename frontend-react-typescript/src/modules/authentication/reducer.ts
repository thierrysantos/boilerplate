import { handleActions } from 'redux-actions';
import Constants from './constants';

const initialState = {
  isLoading: false,
};

export default handleActions(
  {
    [Constants.AUTHENTICATION_REQUEST]: state => ({
      ...state,
      isLoading: true,
    }),
    [Constants.AUTHENTICATION_SUCCESS]: state => ({
      ...state,
      isLoading: false,
    }),
    [Constants.AUTHENTICATION_ERROR]: state => ({
      ...state,
      isLoading: false,
    }),
  },
  initialState,
);
