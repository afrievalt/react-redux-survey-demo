import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAutoActions } from '../auto/auto-control'
import { TableAuto } from '../controls/table-auto'
import { ButtonLink } from '../controls/button-link'
import { TableHeader } from '../controls/table-header'
 
export class HomeContent extends Component {  
  render() {
    return (
      <div>
        <h1>Home page</h1>
        <TableAuto path='newUser' editHref='/update'>
        </TableAuto>
        <TableAuto path='newUser' editHref='/update'>
          <TableHeader labels={['one', 'two', 'three']} />
          <div>second child</div>
        </TableAuto>
        <ButtonLink 
          href='/add'
          onClick={this.handleClearForm}          
        >
          Add
        </ButtonLink>
        <Link to='/add'>Add</Link>
      </div>          
    )    
  }

  handleClearForm = this.props.handleClearForm.bind(this, 'newUser')
}

const mapStateToProps = (state) => {
  console.log(state)
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClearForm: getAutoActions(dispatch).handleClearForm
  }
}


export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeContent)

export default Home;
