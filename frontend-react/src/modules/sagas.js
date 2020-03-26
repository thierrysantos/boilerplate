import { all } from 'redux-saga/effects';
import { importFiles } from '~/utils/importFiles';

const sagasContext = require.context('./', true, /\/saga\.js/i);

export default function* sagas() {
	return yield all(Object.values(importFiles(sagasContext)));
}
