import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import {getAutoActions} from '../auto/auto-control'

class History extends PureComponent {
  render() {
    const history = this.props.history || "/add"
    if (this.props.location.pathname !== history) {
      return (<Redirect push from="/" to={history}/>);
    }
    return null
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    history: state._history || "/add"
  }
}

const HistoryAuto = connect(mapStateToProps)(History)

export default HistoryAuto;
