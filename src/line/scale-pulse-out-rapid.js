import React, {Component} from 'react';
import PropTypes from 'prop-types';

import 'load-awesome/css/line-scale-pulse-out-rapid.css'

export default class ScalePulseOutRapid extends Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const {className, ...props} = this.props
    return(
      <div className={`la-line-scale-pulse-out-rapid la-2x ${className || ''}`} {...props}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    )
  }
}
