import React, {Component} from 'react';
import PropTypes from 'prop-types';

import 'load-awesome/css/fire.css'

export default class Fire extends Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const {className, ...props} = this.props
    return(
      <div className={`la-fire la-2x ${className || ''}`} {...props}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    )
  }
}
