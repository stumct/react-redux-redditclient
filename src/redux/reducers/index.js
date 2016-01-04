import {helloWorld} from './helloWorld';
import {subreddits, posts, indexes} from './reddit';
import {combineReducers} from 'redux';
import {routeReducer} from 'redux-simple-router';

export default combineReducers({
  subreddits,
  posts,
  indexes,
  routing: routeReducer
});
