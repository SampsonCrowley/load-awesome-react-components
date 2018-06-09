import React from 'react';
import PropTypes from 'prop-types';

import 'load-awesome-relative/css/square-loader.css'

export default class Loader extends React.Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const {className, ...props} = this.props
    return(
      <div className={`la-square-loader ${className || ''}`} {...props}>
        <div></div>
      </div>
    )
  }
}
