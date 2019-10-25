import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import EntradaChips from './EntradaChipsContainer';

class EntradaChipsRoute extends Component{

  render() {
    return(
      <Switch>
        <Route exact path='/logged/entradaChips/add' component={EntradaChips}/>  
      </Switch>
    )
  }
}


export default EntradaChipsRoute