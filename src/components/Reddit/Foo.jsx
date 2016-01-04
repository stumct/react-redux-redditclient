import React from 'react';
import {connect} from 'react-redux';
import { pushPath } from 'redux-simple-router';

const Foo = (props) => <div>This is the Foo component  <button onClick={() => dispatch(pushPath('/foo'))}>Home</button></div>

export default connect()(Foo);
