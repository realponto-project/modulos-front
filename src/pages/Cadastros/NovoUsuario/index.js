import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import NovoUsuario from './NovoUsuarioContainer'

class NovoUsuarioRoute extends Component{

  render() {
    return(
      <Switch>
        <Route exact path='/logged/novoUsuario/add' component={NovoUsuario}/>  
      </Switch>
    )
  }
}


export default NovoUsuarioRoute