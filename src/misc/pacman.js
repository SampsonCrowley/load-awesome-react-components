import React, {Component} from 'react';
import PropTypes from 'prop-types';

import 'load-awesome-relative/css/pacman.css'

export default class Pacman extends Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const {className, ...props} = this.props
    return(
      <div className={`la-pacman la-2x ${className || ''}`} {...props}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    )
  }
}
