import React from 'react';
import PropTypes from 'prop-types';

import 'load-awesome-relative/css/ball-newton-cradle.css'

export default class NewtonCradle extends React.Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const {className, ...props} = this.props
    return(
      <div className={`la-ball-newton-cradle ${className || ''}`} {...props}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    )
  }
}
