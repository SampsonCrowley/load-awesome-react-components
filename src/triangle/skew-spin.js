import React, {Component} from 'react';
import PropTypes from 'prop-types';

import 'load-awesome-relative/css/triangle-skew-spin.css'

export default class SkewSpin extends Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const {className, ...props} = this.props
    return(
      <div className={`la-triangle-skew-spin ${className || ''}`} {...props}>
        <div></div>
      </div>
    )
  }
}
