import React, {Component} from 'react';
import PropTypes from 'prop-types';

import 'load-awesome-relative/css/ball-rotate.css'

export default class Rotate extends Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const {className, ...props} = this.props
    return(
      <div className={`la-ball-rotate la-2x ${className || ''}`} {...props}>
        <div></div>
      </div>
    )
  }
}
