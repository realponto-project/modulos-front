import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import SolicitacoesTroca from './SolicitacoesTrocaContainer';

class SolicitacoesTrocaRoute extends Component{

  render() {
    return(
      <Switch>
        <Route exact path='/logged/solicitacaoTroca/add' component={SolicitacoesTroca}/>  
      </Switch>
    )
  }
}


export default SolicitacoesTrocaRoute