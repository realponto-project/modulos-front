import React, { Component } from 'react'
import './index.css'
import { Input, Select, InputNumber, Button, Icon, message } from 'antd'

const { Option } = Select;

class EntradaChips extends Component {

  state = {
    quant: 1,
    dadosChip: [{
      operadora: 'Não selecionado',
      nChip: '',
      ip: '',
    }]
  }

  errorMessage = () => {
    message.error('Não é permitido apagar esta linha');
  };

  remove = (value) => {
    const oldCarrinho = this.state.dadosChip
    const newCarrinho = oldCarrinho.filter(valor => valor !== value)

    this.setState({
      dadosChip: newCarrinho,
      quant: this.state.quant - 1
    })
  }

  handleChange = (value, e) => {

    const dadosChip = this.state.dadosChip

    dadosChip[e.key] = {
      ...dadosChip[e.key],
      operadora: value
    }

    this.setState({
      dadosChip,
    })
  }


  onChange = (e) => {

    const dadosChip = this.state.dadosChip

    dadosChip[e.target.id] = {
      ...dadosChip[e.target.id],
      [e.target.name]: e.target.value
    }

    this.setState({
      dadosChip,
    })
  }

  adicionarCarrinho = () => {
    const dadosChip = this.state.dadosChip
    
    dadosChip.push({
      operadora: 'Não selecionado',
      nChip: '',
      ip: '',
    })

    this.setState({
      dadosChip,
      quant: this.state.quant + 1
    })
  }

  render() {
    return (
      <div className='div-card-usuario'>
        <div className='linhaTexto-usuario'>
          <h1 className='h1-usuario'>Entrada dos chips</h1>
        </div>

        <div className='linha3-entradaChips'>
          <div className='div-quant-entradaChips'>
            <div className='div-textRef-entradaChips'>Quant:</div>
            <div className='div-inputs'>
              <InputNumber
                disabled
                min={1}
                value={this.state.quant}
              />
            </div>
          </div>
        </div>

        <div className='div-separete'></div>

        <div className='div-linha-dados'>Dados do chip</div>

        <div className='linha-entradaChips'>
          <div className='div-nChip'>Nº chip</div>
          <div className='div-ip'>IP</div>
          <div className='div-operadora'>Operadora</div>
          <div className='div-buttonAdd'>Ações</div>
        </div>

        {this.state.dadosChip.map((item, index) =>
        <div className='div-linhas'>
            <div className='linha2-entradaChips'>
              <div className='div-nChip2'>
                <Input
                  placeholder='Digite o nº'
                  name='nChip'
                  value={item.nChip}
                  id={index}
                  onChange={this.onChange}
                  className='input-90'
                />
              </div>
              <div className='div-ip2'>
                <Input
                  placeholder='Digite o IP'
                  name='ip'
                  value={item.ip}
                  id={index}
                  onChange={this.onChange}
                  className='input-90'
                />
              </div>
              <div className='div-operadora2'>
                <Select value={item.operadora} style={{ width: '90%' }} onChange={this.handleChange}>
                  <Option key={index} value="oi">OI</Option>
                  <Option key={index} value="claro">CLARO</Option>
                  <Option key={index} value="vivo">VIVO</Option>
                  <Option key={index} value="tim">TIM</Option>
                </Select>
              </div>
            </div>

            <div className='div-buttonAdd2'>
              <Icon type="delete" onClick={this.state.quant !== 1 ? () => this.remove(item) : this.errorMessage}/>
          </div>
        </div>

          )}

          <div className='div-buttonAdd2'>
            <Button
              className='button'
              type='primary'
              onClick={this.adicionarCarrinho}
            >
              Adicionar
            </Button>
          </div>
        </div>

    )
  }
}

export default EntradaChips