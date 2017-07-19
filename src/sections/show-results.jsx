import React, { Component } from 'react'
import { connect } from 'react-redux'
import { select } from '../ducks/answer-question.duck'

export class ShowResultsContent extends Component {
  
  render() {
    const rows = this.getRows()
    return (
      <div className='show-results'>
        <h3 className='show-results__header'>Results</h3>
        <table className='show-results__table'>
          <tbody>
            {rows}
          </tbody>
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
    const className = (result.id === +this.props.answer) ? 'show-results__row--selected' : undefined
    return (<tr key={result.id} className={className}>
        <td className='show-results__text-column'>{result.text}</td>
        <td >{`(${result.count} answered`}</td>
        <td >{`${result.percentage}%)`}</td>
      </tr>)
  }  
}

const mapStateToProps = (state) => {  
  return {
    results: select.getResults(state),
    answer: state.answer,
    isValid: !!state.answer    
  }
}

export const ShowResults =connect(mapStateToProps)(ShowResultsContent) 