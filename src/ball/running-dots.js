import React, {Component} from 'react';
import PropTypes from 'prop-types';

import 'load-awesome/css/ball-running-dots.css'

export default class RunningDots extends Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const {className, ...props} = this.props
    return(
      <div className={`la-ball-running-dots la-2x ${className || ''}`} {...props}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    )
  }
}
