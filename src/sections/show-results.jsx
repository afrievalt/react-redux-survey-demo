import React, { Component } from 'react'
import { connect } from 'react-redux'
import { select } from '../ducks/answer-question.duck'

export class ShowResultsContent extends Component {
  
  render() {
    const rows = this.getRows()
    return (
      <div>
        <h3>Results</h3>
        <table>
          {rows}
        </table>
      </div>
    )
  }
  componentWillMount() {
    if(!this.props.isValid){
      window.location = '/' // redirect home if user tries to start at show-results
    }
  }
  getRows = () => {
    return this.props.results.map(this.getRow)
  }
  getRow = (result) => {
    const className = result.id === this.props.answer && 'show-results__row--selected'
    return (<tr key={result.id} className={className}>
        <td className='show-results__text-column'>{result.text}</td>
        <td >{result.count}</td>
        <td >{`${result.percentage}%`}</td>
      </tr>)
  }  
}

const mapStateToProps = (state) => {  
  return {
    results: select.getResults(state),
    isValid: !!state.answer    
  }
}

export const ShowResults =connect(mapStateToProps)(ShowResultsContent) 