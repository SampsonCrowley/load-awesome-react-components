import React from 'react';
import PropTypes from 'prop-types';

import 'load-awesome-relative/css/ball-scale-ripple.css'

export default class ScaleRipple extends React.Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const {className, ...props} = this.props
    return(
      <div className={`la-ball-scale-ripple ${className || ''}`} {...props}>
        <div></div>
      </div>
    )
  }
}
