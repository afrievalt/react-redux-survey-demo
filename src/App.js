import React, {Component} from 'react'
import {Provider} from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import {store} from './store'
import './App.css';
import {FirstSection} from './sections/first-section'
import {ShowResults} from './sections/show-results'
import {Header} from './sections/header'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Route component={Header} path="/" />
            <Route component={FirstSection} exact path="/"/>            
            <Route component={ShowResults} path="/results"/>           
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App