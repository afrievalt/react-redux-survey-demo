import React, {Component} from 'react';

import {LabelWrap} from './label-wrap'

class RadioInput extends Component {
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
      <label key={index}>
        <input value={listItem.id} type='radio' name={this.props.path}  onChange={this.handleChange}
          checked={isChecked}
        />
        <span>{listItem.text}</span>
      </label>
    )
  }
  handleChange = event => {
    this
      .props
      .onChange(event.target.value)
  }

}

export const RadioInputAuto = RadioInput

export default RadioInputAuto