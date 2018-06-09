import React from 'react';
import PropTypes from 'prop-types';

import 'load-awesome-relative/css/ball-pulse-sync.css'

export default class PulseSync extends React.Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const {className, ...props} = this.props
    return(
      <div className={`la-ball-pulse-sync ${className || ''}`} {...props}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    )
  }
}
