import React, {Component} from 'react';
import PropTypes from 'prop-types';

import 'load-awesome-relative/css/ball-triangle-path.css'

export default class TrianglePath extends Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const {className, ...props} = this.props
    return(
      <div className={`la-ball-triangle-path ${className || ''}`} {...props}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    )
  }
}
