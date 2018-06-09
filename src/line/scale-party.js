import React from 'react';
import PropTypes from 'prop-types';

import 'load-awesome-relative/css/line-scale-party.css'

export default class ScaleParty extends React.Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const {className, ...props} = this.props
    return(
      <div className={`la-line-scale-party ${className || ''}`} {...props}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    )
  }
}
