import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

import { fetchRecentPostsReducer } from '../features/fetchRecentPosts/fetchRecentPostsSlice';
import { fetchCategoriesReducer } from '../features/fetchCategory/fetchCategorySlice';
import { fetchTagsReducer } from '../features/fetchTag/fetchTagSlice';
import { fetchPostsOfCategoryReducer } from '../features/fetchPostsOfCategory/fetchPostsOfCategorySlice';
import { fetchPostsOfTagReducer } from '../features/fetchPostsOfTag/fetchPostsOfTagSlice';
import { fetchPostsReducer } from '../features/fetchPosts/fetchPostsSlice';
import { posterReducer } from '../features/fetchPost/posterSlice';
import axios from 'axios';

const backURL = '127.0.0.1:3030';

axios.defaults.baseURL = `http://${backURL}`;
axios.defaults.withCredentials = true;

const combinedReducer = combineReducers({
  recentPostCards: fetchRecentPostsReducer,
  categories: fetchCategoriesReducer,
  tags: fetchTagsReducer,
  posts: fetchPostsReducer,
  postsOfCategory: fetchPostsOfCategoryReducer,
  postsOfTag: fetchPostsOfTagReducer,
  poster: posterReducer,
});

const rootReducer: typeof combinedReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  }
  return combinedReducer(state, action);
};

export default rootReducer;
