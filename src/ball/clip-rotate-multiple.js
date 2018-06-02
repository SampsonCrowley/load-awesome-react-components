import React, {Component} from 'react';
import PropTypes from 'prop-types';

import 'load-awesome/css/ball-clip-rotate-multiple.css'

export default class ClipRotateMultiple extends Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const {className, ...props} = this.props
    return(
      <div className={`la-ball-clip-rotate-multiple la-2x ${className || ''}`} {...props}>
        <div></div>
        <div></div>
      </div>
    )
  }
}
