import React, {Component} from 'react';
import PropTypes from 'prop-types';

import 'load-awesome/css/ball-fall.css'

export default class Fall extends Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const {className, ...props} = this.props
    return(
      <div className={`la-ball-fall la-2x ${className || ''}`} {...props}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    )
  }
}
