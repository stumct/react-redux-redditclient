import '../node_modules/bootstrap/less/bootstrap.less';
import './styles/main.less';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute } from 'react-router';
import { createHashHistory } from 'history';
import { syncReduxAndRouter } from 'redux-simple-router';
import { reducers, middleware } from './redux/index.js';
import { App, Home, Posts } from './components/Reddit/index.js';

let initialState = {
  subreddits: {
    reqInProgress:false,
    subreddits_data: {}
  },
  posts: {
    reqInProgress:false,
    posts_data: {}
  },
  indexes: {
    posts_by_subreddit: {}
  }
};

let createStoreWithMiddleware = applyMiddleware(middleware.thunk, middleware.logger)(createStore);
let store = createStoreWithMiddleware(reducers, initialState);
const history = createHashHistory();
syncReduxAndRouter(history, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="r/:subreddit" component={Posts} />
      </Route>
    </Router>
  </Provider>
  ,document.getElementById('root'));
