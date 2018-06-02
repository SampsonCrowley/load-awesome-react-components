import React, {Component} from 'react';
import PropTypes from 'prop-types';

import 'load-awesome/css/line-spin-clockwise-fade.css'

export default class SpinClockwiseFade extends Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const {className, ...props} = this.props
    return(
      <div className={`la-line-spin-clockwise-fade la-2x ${className || ''}`} {...props}>
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
