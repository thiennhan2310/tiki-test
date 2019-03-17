import { SET_ARTICLE } from '../actions/article'
const initialState = {
  articles: [],
}

function articles(state=initialState, action) {
  switch(action.type){
    case SET_ARTICLE:
      return {
        ...state,
        articles:action.articles
      }
    default:
    return state;
  }
}
export default articles;