import {reddit as consts}
from '../constants/index'


export const subreddits = (state = {}, action) => {
  switch (action.type) {
    case consts.REQUEST_SUBREDDITS:
      return Object.assign({}, state, {
        reqInProgress: true
      })
    case consts.RECEIVE_SUBREDDITS:
      let obj = {};
      action.data.map(i => obj[i.data.display_name] = i.data)
      return Object.assign({}, state, {
        reqInProgress: false,
        subreddits_data: {...state.subreddits_data, ...obj
        }
      })
    default:
      return state;
  }
}

export const posts = (state = {}, action) => {
  switch (action.type) {
    case consts.REQUEST_POSTS:
      return Object.assign({}, state, {
        reqInProgress: true
      })
    case consts.RECEIVE_POSTS:
      let obj = {};
      action.data.map(i => obj[i.data.id] = i.data)
      return Object.assign({}, state, {
        reqInProgress: false,
        posts_data: {...state.posts_data, ...obj
        }
      })
    default:
      return state;
  }
}

export const indexes = (state = {}, action) => {
  switch (action.type) {
    case consts.RECEIVE_POSTS:

    let obj = {};
    obj[action.subreddit] = action.data.map(i => i.data.id)
console.log(obj)
    return {...state, ...obj}
    default:
    return state
  }
}
