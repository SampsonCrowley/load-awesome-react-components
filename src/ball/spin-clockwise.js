import React from 'react';
import PropTypes from 'prop-types';

import 'load-awesome-relative/css/ball-spin-clockwise.css'

export default class SpinClockwise extends React.Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const {className, ...props} = this.props
    return(
      <div className={`la-ball-spin-clockwise ${className || ''}`} {...props}>
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
