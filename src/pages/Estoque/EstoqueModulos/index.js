import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import EstoqueModulos from './EstoqueModulosContainer';

class EstoqueModulosRoute extends Component{

  render() {
    return(
      <Switch>
        <Route exact path='/logged/estoqueModulos/dash' component={EstoqueModulos}/>  
      </Switch>
    )
  }
}


export default EstoqueModulosRoute