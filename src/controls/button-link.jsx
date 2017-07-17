import React, {Component} from 'react';
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router'

class ButtonLinkContent extends Component {
  render() {
    return (
      <button
        type="submit"
        onClick={this.handleClick}
      >
        {this.props.children}
      </button>
    )
  }

  handleClick = (e) => {
    e.preventDefault()    
    this.props.href && this.props.history.push(this.props.href)
    this.props.onClick && this.props.onClick()
    return true;
  }
}

export const ButtonLink = withRouter(ButtonLinkContent)