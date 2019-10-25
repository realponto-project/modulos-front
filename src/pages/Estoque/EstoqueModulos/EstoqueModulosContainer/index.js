import React, { Component } from 'react'
import './index.css'
import { Button, Input, Select } from 'antd'

const { Option } = Select;

class EstoqueModulos extends Component {

  state = {
    avancado: false,
    operadora: 'TODOS',
    nChip: '',
    ip: '',
  }

  avancado = () => {
    this.setState({
      avancado: !this.state.avancado
    })
  }

  handleChangeOperadora = (value) => {
    this.setState({
      operadora: value
    })
  }

  render() {
    return (
      <div className='div-card-usuario'>
        <div className='linhaTexto-usuario'>
          <h1 className='h1-usuario'>Estoque dos módulos</h1>
        </div>

        <div className='div-spaceButton'>
          {this.state.avancado ?
            <Button
              className='button'
              type='primary'
              onClick={this.avancado}
            >
              Ocultar
          </Button> :
            <Button
              className='button'
              type='primary'
              onClick={this.avancado}
            >
              Avançado
          </Button>
          }
        </div>
        {!this.state.avancado ? null :
          <div className='div-linhas-estoqueModulos'>
            <div className='linha2-entradaChips'>
              <div className='div-text-usuario'>Operadora:</div>
              <div className='div-operadora-estoqueChips'>
                <Select value={this.state.operadora} style={{ width: '90%' }} onChange={this.handleChangeOperadora}>
                  <Option value="oi">OI</Option>
                  <Option value="claro">CLARO</Option>
                  <Option value="vivo">VIVO</Option>
                  <Option value="tim">TIM</Option>
                </Select>
              </div>
              <div className='div-text-usuario'>Nº chip:</div>
              <div className='div-nChip-estoqueChips'>
                <Input
                  placeholder='Digite o nº'
                  name='nChip'
                  value={this.state.nChip}
                  onChange={this.onChange}
                  className='input-90'
                />
              </div>
              <div className='div-text-usuario'>IP:</div>
              <div className='div-estoqueChips'>
                <Input
                  placeholder='Digite o nº'
                  name='ip'
                  value={this.state.ip}
                  onChange={this.onChange}
                  className='input-100'
                />
              </div>
            </div>
          </div>
        }

        <div className='div-cabecalho-Gentrada'>
          <div className='cel-produto-cabecalho-Gentrada'>
            Produto
          </div>
          <div className='cel-quant-cabecalho-Gentrada'>
            Qnt.
          </div>
          <div className='cel-usuario-cabecalho-Gentrada'>
            Usuário
          </div>
          <div className='cel-data-cabecalho-Gentrada'>
            Data lançamento
          </div>
          {/* {this.props.auth.typeAccount === 'MOD' ? <div className='cel-edit-cabecalho-Gentrada'/> : null} */}
        </div>
        <div className='div-separate-Gentrada'/>  
      </div>
    )
  }
}

export default EstoqueModulos