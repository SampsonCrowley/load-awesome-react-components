import React from 'react';
import PropTypes from 'prop-types';

import 'load-awesome-relative/css/ball-clip-rotate-multiple.css'

export default class ClipRotateMultiple extends React.Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const {className, ...props} = this.props
    return(
      <div className={`la-ball-clip-rotate-multiple ${className || ''}`} {...props}>
        <div></div>
        <div></div>
      </div>
    )
  }
}
