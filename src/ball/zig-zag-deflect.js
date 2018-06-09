import React from 'react';
import PropTypes from 'prop-types';

import 'load-awesome-relative/css/ball-zig-zag-deflect.css'

export default class ZigZagDeflect extends React.Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const {className, ...props} = this.props
    return(
      <div className={`la-ball-zig-zag-deflect ${className || ''}`} {...props}>
        <div></div>
        <div></div>
      </div>
    )
  }
}
