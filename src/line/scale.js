import React, {Component} from 'react';
import PropTypes from 'prop-types';

import 'load-awesome-relative/css/line-scale.css'

export default class Scale extends Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const {className, ...props} = this.props
    return(
      <div className={`la-line-scale la-2x ${className || ''}`} {...props}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    )
  }
}
