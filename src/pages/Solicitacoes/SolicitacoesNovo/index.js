import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import SolicitacoesNovo from './SolicitacoesNovoContainer';

class SolicitacoesNovoRoute extends Component{

  render() {
    return(
      <Switch>
        <Route exact path='/logged/solicitacaoNovo/add' component={SolicitacoesNovo}/>  
      </Switch>
    )
  }
}


export default SolicitacoesNovoRoute