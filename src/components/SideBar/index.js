import React, { Component } from 'react'
import { Menu, Icon, Tooltip, message } from 'antd';
import './index.css'
import { Redirect } from 'react-router-dom'
import { Logout } from '../../pages/Login/LoginRedux/action'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
const SubMenu = Menu.SubMenu;

class Sider extends Component {

  state = {
    current: '0',
    redirect: false,
    open: [],
  };

  onClose = e => {
    console.log(e, 'I was closed.');
  };

  warning = () => {
    message.warning('Há uma análise em andamento');
  };

  logout = async () => {
    // const token = localStorage.getItem('token')
    // token.replace(/"/ig, '')
    
    // console.log(token)
    // await Logout(token)    //aqui não apaga no banco de dados

    // if (this.props.analyze.serialNumber) {
    //   return this.warning()
    // }

    await this.props.Logout(this.props.auth.token)
    
    this.setState({
      current: 'logout',
      redirect: true,
    })
  }

  handleClick = e => {
    
    this.setState({
      current: e.key,
      redirect: true,
      open: [
        e.keyPath[1]
      ]
    })
  }

  handleClickCompany = (current, keyPath) => {
    
    this.setState({
      current,
      redirect: true,
      open: [
        keyPath
      ]
    })
  }

  changeRedirectState = () => {
    this.setState({
      redirect: false
    })
  }

  render() {
    // console.log(this.props)
    if (this.state.redirect) {
      this.changeRedirectState()
      switch (this.state.current) {
        case 'novoUsuario_add':
          return <Redirect to='/logged/novoUsuario/add' />
        case 'novaEmpresa_add':
          return <Redirect to='/logged/novaEmpresa/add' />
        case 'entradaChips_add':
          return <Redirect to='/logged/entradaChips/add' />
        case 'entradaModulos_add':
          return <Redirect to='/logged/entradaModulos/add' />
        case 'controle_dash':
          return <Redirect to='/logged/controle/dash' />
        case 'monitoramentoSolicitacoes_dash':
          return <Redirect to='/logged/monitoramentoSolicitacoes/dash' />
        case 'monitoramentoEstoque_dash':
          return <Redirect to='/logged/monitoramentoEstoque/dash' />
        case 'estoqueChips_dash':
          return <Redirect to='/logged/estoqueChips/dash' />
        case 'estoqueModulos_dash':
          return <Redirect to='/logged/estoqueModulos/dash' />
        case 'solicitacaoNovo_add':
          return <Redirect to='/logged/solicitacaoNovo/add' />
        case 'solicitacaoTroca_add':
          return <Redirect to='/logged/solicitacaoTroca/add' />
        case 'screenControl_dash':
          return <Redirect to='/logged/screenControl/dash' />
        case 'logout':
          return <Redirect to='/login' />
        default:
          return <Redirect to='/logged/dash' />
      }
    }
    return (
      <div>
        <div className='menuIcon'>

          <Tooltip placement="bottom" title={'Logout'} >
            <Icon key='logout' className='menuIcon-icon' type="logout" 
            onClick={() => this.logout()}
            />
          </Tooltip>

          <Tooltip placement="bottom" title={'Empresas'} >
            <Icon className='menuIcon-icon' type="bank" onClick={()=> this.handleClickCompany("novoUsuario_add", "Empresas")}/>
          </Tooltip>

          <Tooltip placement="bottom" title={'Equipamentos'}>
            <Icon className='menuIcon-icon' type="printer" onClick={()=> this.handleClickCompany("novoUsuario_add", "Equipamento")} />
          </Tooltip>

          <Tooltip placement="bottom" title={'Peças'}>
            <Icon className='menuIcon-icon' type="setting" onClick={()=> this.handleClickCompany("novoUsuario_add", "Pecas")} />
          </Tooltip>
 
          <Tooltip placement="bottom" title={'Nova entrada'}>
            <Icon className='menuIcon-icon' type="form" onClick={()=> this.handleClickCompany("novoUsuario_add", "LabTec")}/>
          </Tooltip>

        </div>

        <Menu
          className='menu'
          theme='dark'
          onClick={this.handleClick}
          defaultOpenKeys={this.state.open}
          selectedKeys={[this.state.current]}
          mode="inline"
        >
          
          <SubMenu
            key="Cadastros"
            title={
              <span>
                <Icon type="form" />
                <span>Cadastros</span>
              </span>
            }
          >
            <Menu.Item key="novoUsuario_add"><Icon type="user-add" />Novo usuário</Menu.Item>
            <Menu.Item key="novaEmpresa_add"><Icon type="form" />Nova empresa</Menu.Item>       
          </SubMenu>  

          <SubMenu
            key="Entradas"
            title={
              <span>
                <Icon type="shopping-cart" />
                <span>Entradas</span>
              </span>
            }
          >
            <Menu.Item key="entradaChips_add"><Icon type="idcard" />Chips</Menu.Item>
            <Menu.Item key="entradaModulos_add"><Icon type="shopping" />Módulos</Menu.Item>       
          </SubMenu>  

          <SubMenu
            key="Controle"
            title={
              <span>
                <Icon type="control" />
                <span>Controle</span>
              </span>
            }
          >
            <Menu.Item key="controle_dash"><Icon type="control" />Controle</Menu.Item>     
          </SubMenu>  

          <SubMenu
            key="Monitoramento"
            title={
              <span>
                <Icon type="dashboard" />
                <span>Monitoramento</span>
              </span>
            }
          >
            <Menu.Item key="monitoramentoSolicitacoes_dash"><Icon type="safety" />Solicitações</Menu.Item>
            <Menu.Item key="monitoramentoEstoque_dash"><Icon type="stock" />Estoque</Menu.Item>       
          </SubMenu>  

          <SubMenu
            key="Estoque"
            title={
              <span>
                <Icon type="stock" />
                <span>Estoque</span>
              </span>
            }
          >
            <Menu.Item key="estoqueChips_dash"><Icon type="idcard" />Chips</Menu.Item>
            <Menu.Item key="estoqueModulos_dash"><Icon type="shopping" />Módulos</Menu.Item>       
          </SubMenu>  

          <SubMenu
            key="Solicitações"
            title={
              <span>
                <Icon type="safety" />
                <span>Solicitações</span>
              </span>
            }
          >
            <Menu.Item key="solicitacaoNovo_add"><Icon type="plus-circle" />Novo</Menu.Item>
            <Menu.Item key="solicitacaoTroca_add"><Icon type="undo" />Troca / Retorno</Menu.Item>       
          </SubMenu>  
        </Menu>
      </div>
    );
  }
}


function mapDispacthToProps(dispach) {
  return bindActionCreators ({ Logout }, dispach)
}

function mapStateToProps (state) {
  return {
    auth: state.auth,
    analyze: state.analyze,
  }
}

export default connect (mapStateToProps, mapDispacthToProps)(Sider)