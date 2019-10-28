import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import MonitoramentoSolicitacoes from './MonitoramentoSolicitacoesContainer';

class MonitoramentoSolicitacoesRoute extends Component{

  render() {
    return(
      <Switch>
        <Route exact path='/logged/monitoramentoSolicitacoes/dash' component={MonitoramentoSolicitacoes}/>  
      </Switch>
    )
  }
}


export default MonitoramentoSolicitacoesRoute