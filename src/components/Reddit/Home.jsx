import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {redditApi} from '../../redux/actions/index.js'

class Home extends React.Component {
  constructor(props){
    super(props)
  }
  componentWillMount(){
    this.props.dispatch(redditApi.requestSubreddits())
    this.props.dispatch(redditApi.getSubreddits())
  }
  render(){
    const {dispatch, subreddits} = this.props;
    console.log(subreddits)
    return (
      <div>
        This is the Home component
        {subreddits.reqInProgress ? <h3>LOADING</h3> : null}
        <ul>
          {this.renderSubreddits()}
        </ul>
    </div>
    )
  }
  renderSubreddits(){
    const {subreddits} = this.props;
    let obj = [];
    Object.keys(subreddits.subreddits_data).forEach(sr => obj.push(subreddits.subreddits_data[sr]) )
    return obj.map(i => <li key={i.display_name}><Link to={'/r/'+i.display_name}>{i.display_name}</Link></li>)
  }
}
function filterState(state){
  return {
    subreddits: state.subreddits
  }
}
export default connect(filterState)(Home);
