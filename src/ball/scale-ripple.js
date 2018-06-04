import React, {Component} from 'react';
import PropTypes from 'prop-types';

import 'load-awesome-relative/css/ball-scale-ripple.css'

export default class ScaleRipple extends Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const {className, ...props} = this.props
    return(
      <div className={`la-ball-scale-ripple la-2x ${className || ''}`} {...props}>
        <div></div>
      </div>
    )
  }
}
