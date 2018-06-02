import React, {Component} from 'react';
import PropTypes from 'prop-types';

import 'load-awesome/css/cog.css'

export default class Cog extends Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const {className, ...props} = this.props
    return(
      <div className={`la-cog la-2x ${className || ''}`} {...props}>
        <div></div>
      </div>
    )
  }
}
