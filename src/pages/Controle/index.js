import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Controle from './ControleContainer';

class ControleRoute extends Component{

  render() {
    return(
      <Switch>
        <Route exact path='/logged/controle/dash' component={Controle}/>  
      </Switch>
    )
  }
}


export default ControleRoute