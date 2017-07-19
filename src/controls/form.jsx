import React, {Component} from 'react'
import { withRouter } from 'react-router'

class FormContent extends Component {  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.props.children}
      </form>
    );
  } 
  
  handleSubmit = event => {
    const {isValid = true } = this.props
    event.preventDefault()    
    if(isValid) {
      this.props.handleSubmit()      
      this.props.href && this.props.history.push(this.props.href)      
    } else {
      this.props.handleInvalid()
    }    
  }
}

// I like to import my controls like:
//    import {Form} from './form'
// to more easily navigate to this file in vs-code by hitting F12
export const Form = withRouter(FormContent)

// YOu can also use default import:
//    import theForm from './form'
export default Form;
