/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { all } from 'redux-saga/effects';
import { importFiles } from 'utils/importFiles';
import requireContext from 'require-context.macro';

const sagasContext = requireContext('./', true, /\/saga\.ts/i);

export default function* sagas() {
  return yield all(Object.values(importFiles(sagasContext)));
}
