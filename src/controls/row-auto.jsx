import React, {Component} from 'react';
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'

import { getAutoActions} from '../auto/auto-control'
import * as autoSelect from '../auto/auto-select'

class Row extends Component {
  constructor () {
    super();
    this.state = { fireRedirect: false }
  }
  
  render() {
    const key = this.props.cells[0]
    const cells = this.props.displayCells.map(this.mapCells)
    if( this.state.fireRedirect) {
      const link = `${this.props.editHref}/${this.props.idKey}`//test 
     // this.setState({ fireRedirect: false })
      return (<Redirect to={link} /> )
    }
    else {
      return (
        <tr onClick={this.handleClickRow}>
          {cells}
        </tr>)
    }        
  }
  componentWillMount() {    
    this.state = { fireRedirect: false }
  }
  
  mapCells = (cell, i) => (<td key={i}>{cell}</td>)
  handleClickRow = () => {
    const {path, idKey} = this.props
    this.setState({ fireRedirect: true })
    this.props.handleClickRow(path, idKey)
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,

    headers: autoSelect.selectTableHeaders(ownProps.path, state),
    displayCells: ownProps.cells.slice(1),
    idKey: ownProps.cells[0]
  }
}

const mapDispatchToProps = (dispatch) => {
  const actions = getAutoActions(dispatch)
  return {handleClickRow: actions.handleClickRow}
}

export const RowAuto = connect(mapStateToProps, mapDispatchToProps)(Row)

export default RowAuto
