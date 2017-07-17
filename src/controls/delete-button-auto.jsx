import React, { Component } from 'react';
import { connect } from 'react-redux'

import { ButtonLink } from './button-link'
import { autoProps, inputFilter, getAutoActions } from '../auto/auto-control'

class DeleteButton extends Component {
  render() {
    return (
        <ButtonLink {...this.props} />
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

export const DeleteButtonAuto = connect(mapStateToProps, mapDispatchToProps)(DeleteButton)

export default DeleteButtonAuto;
