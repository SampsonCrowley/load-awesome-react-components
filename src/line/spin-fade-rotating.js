import React, {Component} from 'react';
import PropTypes from 'prop-types';

import 'load-awesome/css/line-spin-fade-rotating.css'

export default class SpinFadeRotating extends Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const {className, ...props} = this.props
    return(
      <div className={`la-line-spin-fade-rotating la-2x ${className || ''}`} {...props}>
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
