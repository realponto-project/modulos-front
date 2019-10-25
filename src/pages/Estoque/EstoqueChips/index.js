import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import EstoqueChips from './EstoqueChipsContainer';

class EstoqueChipsRoute extends Component{

  render() {
    return(
      <Switch>
        <Route exact path='/logged/estoqueChips/dash' component={EstoqueChips}/>  
      </Switch>
    )
  }
}


export default EstoqueChipsRoute