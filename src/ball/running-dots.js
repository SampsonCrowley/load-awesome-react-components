import React from 'react';
import PropTypes from 'prop-types';

import 'load-awesome-relative/css/ball-running-dots.css'

export default class RunningDots extends React.Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const {className, ...props} = this.props
    return(
      <div className={`la-ball-running-dots ${className || ''}`} {...props}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    )
  }
}
