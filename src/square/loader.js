import React, {Component} from 'react';
import PropTypes from 'prop-types';

import 'load-awesome/css/square-loader.css'

export default class Loader extends Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const {className, ...props} = this.props
    return(
      <div className={`la-square-loader la-2x ${className || ''}`} {...props}>
        <div></div>
      </div>
    )
  }
}
