import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import EntradaModulos from './EntradaModulosContainer';

class EntradaModulosRoute extends Component{

  render() {
    return(
      <Switch>
        <Route exact path='/logged/entradaModulos/add' component={EntradaModulos}/>  
      </Switch>
    )
  }
}


export default EntradaModulosRoute