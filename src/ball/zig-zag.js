import React, {Component} from 'react';
import PropTypes from 'prop-types';

import 'load-awesome/css/ball-zig-zag.css'

export default class ZigZag extends Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const {className, ...props} = this.props
    return(
      <div className={`la-ball-zig-zag la-2x ${className || ''}`} {...props}>
        <div></div>
        <div></div>
      </div>
    )
  }
}
