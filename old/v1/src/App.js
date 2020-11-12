import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Main from './pages/Main'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render() {
    return (
      <BrowserRouter>
          <Route exact path="/" component={Main} />
      </BrowserRouter>
    )
  }
}

export default App;