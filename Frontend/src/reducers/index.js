import auth from './auth';
import articles from './articles';
import { combineReducers } from 'redux'

const app = combineReducers({
  auth,
  articles
});

export default app