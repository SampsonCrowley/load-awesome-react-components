import React from 'react';
import PropTypes from 'prop-types';

import 'load-awesome-relative/css/ball-spin-clockwise-fade-rotating.css'

export default class SpinClockwiseFadeRotating extends React.Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const {className, ...props} = this.props
    return(
      <div className={`la-ball-spin-clockwise-fade-rotating ${className || ''}`} {...props}>
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
