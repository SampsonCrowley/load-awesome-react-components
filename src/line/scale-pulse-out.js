import React from 'react';
import PropTypes from 'prop-types';

import 'load-awesome-relative/css/line-scale-pulse-out.css'

export default class ScalePulseOut extends React.Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const {className, ...props} = this.props
    return(
      <div className={`la-line-scale-pulse-out ${className || ''}`} {...props}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    )
  }
}
