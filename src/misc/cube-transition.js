import React from 'react';
import PropTypes from 'prop-types';

import 'load-awesome-relative/css/cube-transition.css'

export default class CubeTransition extends React.Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const {className, ...props} = this.props
    return(
      <div className={`la-cube-transition ${className || ''}`} {...props}>
        <div></div>
        <div></div>
      </div>
    )
  }
}
