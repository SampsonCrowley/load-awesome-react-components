import React from 'react';
import PropTypes from 'prop-types';

import 'load-awesome-relative/css/ball-fall.css'

export default class Fall extends React.Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const {className, ...props} = this.props
    return(
      <div className={`la-ball-fall ${className || ''}`} {...props}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    )
  }
}
