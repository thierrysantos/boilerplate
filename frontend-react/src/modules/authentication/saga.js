import { takeLatest, all } from 'redux-saga/effects';
import * as Actions from './actions';

function* authenticationRequest(action) {
	const { payload } = yield action;
	return payload;
}

export default all([
	takeLatest(Actions.authenticationRequest, authenticationRequest),
]);
