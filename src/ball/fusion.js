import React from 'react';
import PropTypes from 'prop-types';

import 'load-awesome-relative/css/ball-fusion.css'

export default class Fusion extends React.Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const {className, ...props} = this.props
    return(
      <div className={`la-ball-fusion ${className || ''}`} {...props}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    )
  }
}
