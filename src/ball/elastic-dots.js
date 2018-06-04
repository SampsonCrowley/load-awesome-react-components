import React, {Component} from 'react';
import PropTypes from 'prop-types';

import 'load-awesome-relative/css/ball-elastic-dots.css'

export default class ElasticDots extends Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const {className, ...props} = this.props
    return(
      <div className={`la-ball-elastic-dots ${className || ''}`} {...props}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    )
  }
}
