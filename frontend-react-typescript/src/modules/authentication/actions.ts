import { createAction } from 'redux-actions';
import Constants from './constants';

export const authenticationRequest = createAction(
  Constants.AUTHENTICATION_REQUEST,
);
export const authenticationSuccess = createAction(
  Constants.AUTHENTICATION_SUCCESS,
);
export const authenticationError = createAction(Constants.AUTHENTICATION_ERROR);
