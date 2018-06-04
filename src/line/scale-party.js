import React, {Component} from 'react';
import PropTypes from 'prop-types';

import 'load-awesome-relative/css/line-scale-party.css'

export default class ScaleParty extends Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const {className, ...props} = this.props
    return(
      <div className={`la-line-scale-party la-2x ${className || ''}`} {...props}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    )
  }
}
