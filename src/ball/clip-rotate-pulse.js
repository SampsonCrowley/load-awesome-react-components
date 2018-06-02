import React, {Component} from 'react';
import PropTypes from 'prop-types';

import 'load-awesome/css/ball-clip-rotate-pulse.css'

export default class ClipRotatePulse extends Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const {className, ...props} = this.props
    return(
      <div className={`la-ball-clip-rotate-pulse la-2x ${className || ''}`} {...props}>
        <div></div>
        <div></div>
      </div>
    )
  }
}
