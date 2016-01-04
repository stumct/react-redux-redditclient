import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

class App extends React.Component {
  render () {
    const {dispatch} = this.props
    return (
      <div>
        <header>
          Links:
          {' '}
          <Link to="/">Home</Link>
          {' '}
          <Link to="/foo">Foo</Link>
          {' '}
          <Link to="/bar">Bar</Link>
        </header>
        <h1>React App!</h1>
        {this.props.children}
      </div>
    )
  }
}

export default connect()(App);
