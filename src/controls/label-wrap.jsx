import React, { Component } from 'react';

export class LabelWrap extends Component {
  render() {
    const {
      label = ""
    } = this.props
    return (
      <div >
        <label>
          {label}
        </label>
        {this.props.children}
      </div>
    );
  }
}

export default LabelWrap;
