import React, {Component} from 'react';
import PropTypes from 'prop-types';

import 'load-awesome/css/ball-beat.css'

export default class Beat extends Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const {className, ...props} = this.props
    return(
      <div className={`la-ball-beat la-2x ${className || ''}`} {...props}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    )
  }
}
