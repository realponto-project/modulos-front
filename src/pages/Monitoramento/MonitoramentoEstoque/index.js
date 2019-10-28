import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import MonitoramentoEstoque from './MonitoramentoEstoqueContainer';

class MonitoramentoEstoqueRoute extends Component{

  render() {
    return(
      <Switch>
        <Route exact path='/logged/monitoramentoEstoque/dash' component={MonitoramentoEstoque}/>  
      </Switch>
    )
  }
}


export default MonitoramentoEstoqueRoute