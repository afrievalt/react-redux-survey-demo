import React, { Component } from 'react';
import { LabelWrap } from './label-wrap'

export class TextInput extends Component {
  render() {
    const {
      label = "",
      value=""
    } = this.props
    return (
        <LabelWrap label={label} >
          <input 
            placeholder="email address"
            value={value}
            onChange={this.handleChange}
          />
        </LabelWrap>      
    );
  }
  handleChange = event => {
    const { onChange} = this.props
    onChange && onChange(event.target.value)
  }
  
}

