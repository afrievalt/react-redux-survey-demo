import React, { Component } from 'react'
import { connect } from 'react-redux'

export class HeaderContent extends Component {  
  render() {
    return (
      <header>                    
          <h2>Survey Demo</h2>
          <div className='header__message-wrapper'>
            <div className='header__message--error'>{this.props.error}</div>
          </div>
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