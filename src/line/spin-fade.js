import React, {Component} from 'react';
import PropTypes from 'prop-types';

import 'load-awesome-relative/css/line-spin-fade.css'

export default class SpinFade extends Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const {className, ...props} = this.props
    return(
      <div className={`la-line-spin-fade la-2x ${className || ''}`} {...props}>
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
