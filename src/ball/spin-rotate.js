import React from 'react';
import PropTypes from 'prop-types';

import 'load-awesome-relative/css/ball-spin-rotate.css'

export default class SpinRotate extends React.Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const {className, ...props} = this.props
    return(
      <div className={`la-ball-spin-rotate ${className || ''}`} {...props}>
        <div></div>
        <div></div>
      </div>
    )
  }
}
