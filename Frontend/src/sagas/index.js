import {all, fork} from 'redux-saga/effects';

import watchAuth from './auth';
import watchArticles from './articles';

export default function* rootSaga() {
  yield all([
    fork(watchAuth),
    fork(watchArticles),
  ]);
}