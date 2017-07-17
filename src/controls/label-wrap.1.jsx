import React, { Component } from 'react';

export class LabelWrap extends Component {
  render() {
    const {
      label="",
      className,
    } = this.props
    const getClassNames = getBemClassNamesFactory('label-wrap', className)
    const mainClassName = getClassNames()
    const labelClassName = getClassNames.withObject('label')
    return (
        <div className={mainClassName}>
          <label className={labelClassName}>
            {label}
          </label>
          {this.props.children}
        </div>      
    );
  }
}

export default LabelWrap;
