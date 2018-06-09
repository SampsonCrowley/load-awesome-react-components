import React from 'react';
import PropTypes from 'prop-types';

import 'load-awesome-relative/css/ball-clip-rotate-pulse.css'

export default class ClipRotatePulse extends React.Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const {className, ...props} = this.props
    return(
      <div className={`la-ball-clip-rotate-pulse ${className || ''}`} {...props}>
        <div></div>
        <div></div>
      </div>
    )
  }
}
