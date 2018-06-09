import React from 'react';
import PropTypes from 'prop-types';

import 'load-awesome-relative/css/square-spin.css'

export default class Spin extends React.Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const {className, ...props} = this.props
    return(
      <div className={`la-square-spin ${className || ''}`} {...props}>
        <div></div>
      </div>
    )
  }
}
