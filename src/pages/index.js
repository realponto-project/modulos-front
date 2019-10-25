import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Dash from './Dash';

import { auth } from '../services/auth'
import { Logout } from './Login/LoginRedux/action'
import * as R from 'ramda'
import uuidValidate from 'uuid-validate'
import NovoUsuarioRoute from './Cadastros/NovoUsuario';
import NovoTipoContaRoute from './Cadastros/NovoTipoConta';
import NovaEmpresaRoute from './Cadastros/NovaEmpresa';
import EntradaChipsRoute from './Entradas/EntradaChips';
import EntradaModulosRoute from './Entradas/EntradaModulos';
import EstoqueChipsRoute from './Estoque/EstoqueChips';
import EstoqueModulosRoute from './Estoque/EstoqueModulos';

class PagesRoute extends Component {

  state = {
    auth: true
  }

  hasAuth = R.has('auth')
  hasToken = R.has('token')

  forceLogout = async () => {
    if (!this.hasAuth(this.props)) {
      await this.logout()
    } else if (!this.hasToken(this.props.auth)) {
      await this.logout()
    } else if (!uuidValidate(this.props.auth.token)) {
      await this.logout()
    }
  }

  logout = async () => {
    await this.props.Logout(this.props.auth.token)
  }

  auth = async () => {
    const value = {
      token: this.props.auth.token,
      username: this.props.auth.username
    }

    let response = {}

    response = await auth(value).then(
      resp => this.setState({
        auth: resp ? resp.data : false
      })
    )

    return response
  }

  componentDidMount = async () => {
    await this.auth()

    await this.forceLogout()
  }

  render() {
    if (this.state.auth) {
      return (
        <Switch>
          <Route exact path='/logged/dash' component={Dash} />
          <Route exact path='/logged/novoUsuario/add' component={NovoUsuarioRoute} />
          <Route exact path='/logged/novoTipoConta/add' component={NovoTipoContaRoute} />
          <Route exact path='/logged/novaEmpresa/add' component={NovaEmpresaRoute} />
          <Route exact path='/logged/entradaChips/add' component={EntradaChipsRoute} />
          <Route exact path='/logged/entradaModulos/add' component={EntradaModulosRoute} />
          <Route exact path='/logged/estoqueChips/dash' component={EstoqueChipsRoute} />
          <Route exact path='/logged/estoqueModulos/dash' component={EstoqueModulosRoute} />
        </Switch>
      )
    } else {
      this.logout()
      return <Redirect to='/login' />
    }
  }
}

function mapDispacthToProps(dispach) {
  return bindActionCreators({ Logout }, dispach)
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps, mapDispacthToProps)(PagesRoute)