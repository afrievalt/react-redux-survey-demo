import React, {Component} from 'react';
import {connect} from 'react-redux'

import * as autoSelect from '../auto/auto-select'
import {RowAuto} from './row-auto'

class Table extends Component {
  render() {
    const header = this.getHeader(this.props.options)
    const body = this.getBody(this.props.options)
    return (
      <table>       
        {header}
        {body}
      </table>
    );
  }
  getHeader = () => {
    const mapHeaderCells = (header, i) => <th key={i}>{header}</th>
    const headerCells = this.props.headers.map(mapHeaderCells)
    const x = this.props.children
    if(x) {
      return x
    }    
    return (
      <thead>
        <tr>
          {headerCells}
        </tr>
      </thead>
    )    
  }
  getBody = () => {
    const mapRow = (row, i) => (
      <RowAuto 
        key={i}
        {...this.props}
        cells={row} />
    )
    const rows = this.props.rows.map(mapRow)
    return (
      <tbody>
        {rows}
      </tbody>
    )    
  }  
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    headers: autoSelect.selectTableHeaders(ownProps.path, state),
    rows: autoSelect.selectRows(ownProps.path, state)
  }
}

export const TableAuto = connect(mapStateToProps)(Table)

export default TableAuto
