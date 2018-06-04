import React, {Component} from 'react';
import PropTypes from 'prop-types';

import 'load-awesome-relative/css/line-spin-clockwise-fade-rotating.css'

export default class SpinClockwiseFadeRotating extends Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const {className, ...props} = this.props
    return(
      <div className={`la-line-spin-clockwise-fade-rotating la-2x ${className || ''}`} {...props}>
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
