export const FETCH_ARTICLES = '[Articles] FETCH_ARTICLES';
export const SET_ARTICLE = '[Articles] SET_ARTICLE';
export const FETCH_ARTICLE_BY_ID = '[Articles] FETCH_ARTICLE_BY_ID';

export const setArticles = (articles=[])=>({
  type:SET_ARTICLE,
  articles
})
export const fetchArticles = ()=>({
  type:FETCH_ARTICLES
})