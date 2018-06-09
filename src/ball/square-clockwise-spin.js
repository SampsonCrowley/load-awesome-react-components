import React from 'react';
import PropTypes from 'prop-types';

import 'load-awesome-relative/css/ball-square-clockwise-spin.css'

export default class SquareClockwiseSpin extends React.Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const {className, ...props} = this.props
    return(
      <div className={`la-ball-square-clockwise-spin ${className || ''}`} {...props}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    )
  }
}
