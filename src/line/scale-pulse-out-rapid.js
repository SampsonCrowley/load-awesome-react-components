import React from 'react';
import PropTypes from 'prop-types';

import 'load-awesome-relative/css/line-scale-pulse-out-rapid.css'

export default class ScalePulseOutRapid extends React.Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const {className, ...props} = this.props
    return(
      <div className={`la-line-scale-pulse-out-rapid ${className || ''}`} {...props}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    )
  }
}
