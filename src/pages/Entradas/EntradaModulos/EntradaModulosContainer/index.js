import React, { Component } from 'react'
import './index.css'
import { Button, InputNumber, Select, Radio } from 'antd'

const { Option } = Select;

class EntradaModulos extends Component {

  state={
    numero: 1,
    operadora: 'Não selecionado',
    sonoff: 'Não selecionado',
    status: 'Não selecionado',
    numLacre: 0,
    fonte: false,
  }

  handleChangeSonoff = (value) => {
    this.setState({
      sonoff: value
    })
  }

  handleChangeStatus = (value) => {
    this.setState({
      status: value
    })
  }

  handleChangeOperadora = (value) => {
    this.setState({
      operadora: value
    })
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  changeRadio = (e) => {
    this.setState({
      fonte: e.target.value
    })
  }

  render() {
    return (
      <div className='div-card-usuario'>
        <div className='linhaTexto-usuario'>
          <h1 className='h1-usuario'>Entrada dos módulos</h1>
        </div>

        <div className='div-linha-dados'>Dados do módulo</div>

        <div className='linha-usuario'>
          <div className='div-numero-entradaModulos'>
            <div className='div-text-usuario'>Número:</div>
            <InputNumber 
              min={1} 
              value={this.state.numero} 
              onChange={this.onChange} 
            />
          </div>

          <div className='div-sonoff-entradaModulos'>
            <div className='div-text-usuario'>Sonoff:</div>
            <Select
              defaultValue={this.state.sonoff}
              style={{width: '100%'}}
              onChange={this.handleChangeSonoff}
            >
              <Option value="r1">SONOFF R1</Option>
              <Option value="r2">SONOFF R2</Option>
            </Select>
          </div>

          <div className='div-radio-entradaModulos'>
            <div className='div-text-usuario'>Fonte externa:</div>
              <Radio.Group onChange={this.changeRadio} value={this.state.fonte}>
                <Radio value={true}>Sim</Radio>
                <Radio value={false}>Não</Radio>
              </Radio.Group>
          </div>
        </div>

        <div className='linha1-entradaModulos'>
          <div className='div-numeroLacre-entradaModulos'>
            <div className='div-text-usuario'>Número do lacre:</div>
            <InputNumber 
              min={1} 
              value={this.state.numLacre} 
              onChange={this.onChange} 
            />
          </div>

          <div className='div-status-entradaModulos'>
            <div className='div-text-usuario'>Status:</div>
            <Select
              defaultValue={this.state.status}
              style={{width: '100%'}}
              onChange={this.handleChangeStatus}
            >
              <Option value="fabricacao">EM FABRICAÇÃO</Option>
              <Option value="estoque">ESTOQUE</Option>
              <Option value="testes">AGUARDANDO TESTES</Option>
              <Option value="associacao">ASSOCIAÇÃO</Option>
              <Option value="concluido">CONCLUÍDO</Option>
            </Select>
          </div>

          <div className='div-operadora-entradaModulos'>
            <div className='div-text-usuario'>Operadora:</div>
            <Select
              defaultValue={this.state.operadora}
              style={{width: '100%'}}
              onChange={this.handleChangeOperadora}
            >
              <Option value="fabricacao">CLARO</Option>
              <Option value="estoque">OI</Option>
              <Option value="testes">TIM</Option>
              <Option value="associacao">VIVO</Option>
            </Select>
          </div>
        </div>

        <div className='div-spaceButton'>
          <Button 
            className='button'
            type='primary'>Salvar</Button>
        </div>
      </div>
    )
  }
}

export default EntradaModulos