import React, { Component } from 'react';
import { connect } from 'react-redux'

import { LabelWrap } from './label-wrap'
import { autoProps, inputFilter, getAutoActions } from '../auto/auto-control'

class TextInput extends Component {
  render() {
    return (
        <LabelWrap label={this.props.textLabel} >
          <input 
            {...inputFilter(this.props)}
            onChange={this.handleChange}
          />
        </LabelWrap>      
    );
  }

  handleChange = event => this.props.onChange(this.props.path, event.target.value)
}

const mapStateToProps = (state, ownProps) => {
  return autoProps(state, ownProps)
}

const mapDispatchToProps = (dispatch) => {
  const actions = getAutoActions(dispatch)
  return {
   onChange: actions.handleTextChange 
  }
}

export const TextInputAuto = connect(mapStateToProps, mapDispatchToProps)(TextInput)

export default TextInputAuto;
