import React from 'react';
import PropTypes from 'prop-types';

import 'load-awesome-relative/css/square-jelly-box.css'

export default class JellyBox extends React.Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const {className, ...props} = this.props
    return(
      <div className={`la-square-jelly-box ${className || ''}`} {...props}>
        <div></div>
        <div></div>
      </div>
    )
  }
}
