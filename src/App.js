import React from 'react'
import { Switch, Route } from 'react-router'

import Asd from './pages/Asd';

class App extends React.Component {
  render() {
    return (
      // <Switch>
      //   <Route path="/" render={props => (
      //     <Asd {...props} />
      //   )} />
      // </Switch>
      <Asd />
    )
  }
}
export default App