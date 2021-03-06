import React from 'react';
import PropTypes from 'prop-types';

import 'load-awesome-relative/css/fire.css'

export default class Fire extends React.Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const {className, ...props} = this.props
    return(
      <div className={`la-fire ${className || ''}`} {...props}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    )
  }
}
