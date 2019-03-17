import {call,put, takeEvery} from 'redux-saga/effects';
import {setArticles,FETCH_ARTICLES} from '../actions/article';
import {apiGet} from '../helpers/api';
export default function* watchAuth() {
  yield takeEvery(FETCH_ARTICLES, fetchArticles);
}

function* fetchArticles(action) {
  try {
    const articles = yield(call(apiGet,'/article'));
    yield put(setArticles(articles.data));
  } catch (err) {
    console.log(err);
  }
}