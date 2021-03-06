import React from 'react';
import PropTypes from 'prop-types';

import 'load-awesome-relative/css/ball-scale-ripple-multiple.css'

export default class ScaleRippleMultiple extends React.Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const {className, ...props} = this.props
    return(
      <div className={`la-ball-scale-ripple-multiple ${className || ''}`} {...props}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    )
  }
}
