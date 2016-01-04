import React from 'react';
import {connect} from 'react-redux';
import { pushPath } from 'redux-simple-router';

const Bar = ({dispatch}) => <div>This is the Bar component <button onClick={() => dispatch(pushPath('/foo'))}>Home</button></div>

export default connect()(Bar);
