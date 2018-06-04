import React, {Component} from 'react';
import PropTypes from 'prop-types';

import 'load-awesome-relative/css/square-spin.css'

export default class Spin extends Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const {className, ...props} = this.props
    return(
      <div className={`la-square-spin la-2x ${className || ''}`} {...props}>
        <div></div>
      </div>
    )
  }
}
