import React from 'react';
import PropTypes from 'prop-types';

import 'load-awesome-relative/css/ball-climbing-dot.css'

export default class ClimbingDot extends React.Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const {className, ...props} = this.props
    return(
      <div className={`la-ball-climbing-dot ${className || ''}`} {...props}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    )
  }
}
