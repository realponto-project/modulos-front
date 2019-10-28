import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import NovaEmpresa from './NovaEmpresaContainer'

class NovaEmpresaRoute extends Component{

  render() {
    return(
      <Switch>
        <Route exact path='/logged/novaEmpresa/add' component={NovaEmpresa}/>  
      </Switch>
    )
  }
}


export default NovaEmpresaRoute