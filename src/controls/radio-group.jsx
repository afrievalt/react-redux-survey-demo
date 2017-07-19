import React, {Component} from 'react';

import {LabelWrap} from './label-wrap'

export class RadioGroup extends Component {
  render() {
    const radios = this.getRadios(this.props.options)
    return (
      <LabelWrap label={this.props.textLabel}>
        {radios}
      </LabelWrap>
    );
  }
  getRadios = (list = []) => list.map(this.getRadioControl)
  getRadioControl = (listItem, index) => {
    const isChecked = +this.props.value === listItem.id
    return (
      <label 
        key={index}
        className='radio-group__label'          
      >
        <input 
          value={listItem.id} 
          type='radio' 
          name={this.props.groupName}  
          onChange={this.handleChange}
          checked={isChecked}
        />
        <span>{listItem.text}</span>
      </label>
    )
  }
  handleChange = event => {
    this.props.onChange(event.target.value)
  }
}