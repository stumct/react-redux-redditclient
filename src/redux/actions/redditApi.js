import {reddit} from '../constants/index.js'

const requestSubreddits = function requestSubreddits(data) {
  return {
    type: reddit.REQUEST_SUBREDDITS
  }
}

const fetchSubreddits = function fetchSubreddits() {
  return fetch('https://api.reddit.com/subreddits/popular');
}

const getSubreddits = function getSubreddits() {
  return function(dispatch) {
    return fetchSubreddits()
      .then(
        response => response.json(),
        error => console.log(error)
      )
      .then(
        json => dispatch(recieveSubreddits(json.data.children))
      )
  };
}

const recieveSubreddits = function recieveSubreddits(data) {
  return {
    type: reddit.RECEIVE_SUBREDDITS,
    data: data
  }
}


const requestPosts = function requestPosts(subreddit) {
  return {
    type: reddit.REQUEST_POSTS,
    subreddit: subreddit
  }
}
const fetchPosts = function fetchPosts(subreddit) {
  return fetch('https://api.reddit.com/r/'+subreddit);
}

const getPosts = function getPosts(subreddit) {
  console.log('getPosts')
  return function(dispatch) {
    return fetchPosts(subreddit)
      .then(
        response => response.json(),
        error => console.log(error)
      )
      .then(
        json => dispatch(recievePosts(subreddit,json.data.children))
      )
  };
}

const recievePosts = function recievePosts(subreddit,posts) {
  return {
    type: reddit.RECEIVE_POSTS,
    subreddit: subreddit,
    data: posts
  }
}



export default {
  fetchSubreddits,
  getSubreddits,
  requestSubreddits,
  recieveSubreddits,
  fetchPosts,
  getPosts,
  requestPosts,
  recievePosts
};
