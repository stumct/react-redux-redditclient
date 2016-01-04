import React from 'react';
import {connect} from 'react-redux';
import {redditApi} from '../../redux/actions/index'

class Posts extends React.Component {
  constructor (props) {
    super(props)
  }
  componentWillMount(){
    const {dispatch, params} = this.props;
    dispatch(redditApi.requestPosts(params.subreddit));
    dispatch(redditApi.getPosts(params.subreddit));
  }
  render () {
    const {dispatch, params, subreddits, indexes, posts} = this.props;
    return (
      <div>this is the posts
        {params.subreddit}
        <ul>
          {indexes[params.subreddit] ? indexes[params.subreddit].map(p => <li>{posts.posts_data[p].title}</li>) : null}

        </ul>
      </div>
    )
  }
}

function filterState(state){
  return {
    subreddits: state.subreddits,
    indexes: state.indexes,
    posts: state.posts
  }
}
export default connect(filterState)(Posts)
