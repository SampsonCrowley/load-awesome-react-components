import React from 'react';
import PropTypes from 'prop-types';

import 'load-awesome-relative/css/ball-scale-multiple.css'

export default class ScaleMultiple extends React.Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const {className, ...props} = this.props
    return(
      <div className={`la-ball-scale ${className || ''}`} {...props}>
        <div></div>
      </div>
    )
  }
}
