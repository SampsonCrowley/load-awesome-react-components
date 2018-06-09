import React from 'react';
import PropTypes from 'prop-types';

import 'load-awesome-relative/css/timer.css'

export default class Timer extends React.Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const {className, ...props} = this.props
    return(
      <div className={`la-timer ${className || ''}`} {...props}>
        <div></div>
      </div>
    )
  }
}
