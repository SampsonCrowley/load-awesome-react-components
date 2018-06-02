import React, {Component} from 'react';
import PropTypes from 'prop-types';

import 'load-awesome/css/ball-fussion.css'

export default class Fusion extends Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const {className, ...props} = this.props
    return(
      <div className={`la-ball-fussion la-2x ${className || ''}`} {...props}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    )
  }
}
