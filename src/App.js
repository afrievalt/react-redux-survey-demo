import React, {Component} from 'react'
import {Provider} from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {store} from './store'
import './App.css';
import {FirstSection} from './sections/first-section'
import {ShowResults} from './sections/show-results'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>            
            <Route component={ShowResults} path="/results"/>            
            <Route component={FirstSection} path="/"/>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App