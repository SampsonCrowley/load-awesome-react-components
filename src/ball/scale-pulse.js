import React, {Component} from 'react';
import PropTypes from 'prop-types';

import 'load-awesome-relative/css/ball-scale-pulse.css'

export default class ScalePulse extends Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const {className, ...props} = this.props
    return(
      <div className={`la-ball-scale-pulse ${className || ''}`} {...props}>
        <div></div>
        <div></div>
      </div>
    )
  }
}
