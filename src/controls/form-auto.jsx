import React, {Component} from 'react'
import { withRouter } from 'react-router'

class Form extends Component {
  constructor () {
    super();
    this.state = { fireRedirect: false }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.props.children}
      </form>
    );
  }
  componentWillMount() {
    this.state = { fireRedirect: false }
  }
  
  handleSubmit = event => {
    const {isValid = true } = this.props
    console.log('form-auto.jsx:25 : isValid',  isValid);
    event.preventDefault()    
    if(isValid) {
      this.props.handleSubmit()      
      this.props.href && this.props.history.push(this.props.href)
      
    } else {
      this.props.handleInvalid()
    }
    
  }
}

export const FormAuto = withRouter(Form)

export default FormAuto;
