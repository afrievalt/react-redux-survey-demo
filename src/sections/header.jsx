import React, { Component } from 'react'
import { connect } from 'react-redux'

export class HeaderContent extends Component {  
  render() {
    return (
      <header>                    
          <h2>Survey Demo</h2>
          <h3 className='header__error'>{this.props.error}</h3>
      </header>  
    )    
  }  
}

const mapStateToProps = (state) => {  
  return {
    error: state.error
  }
}

export const Header = connect(mapStateToProps)(HeaderContent)