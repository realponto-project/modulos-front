import React, { Component } from "react";
import "./index.css";
import { Input, Select, InputNumber, Button, Icon, message } from "antd";
import * as R from "ramda";

import { validators, masks } from "./validators";
import { NovoChipService } from "../../../../services/chip";

const { Option } = Select;

class EntradaChips extends Component {
  state = {
    quant: 1,
    dadosChip: [
      {
        operadora: "Não selecionado",
        number: "",
        ip: ""
      }
    ],
    fieldFalha: [
      {
        operadora: false,
        number: false,
        ip: false
      }
    ],
    message: [
      {
        operadora: "",
        number: "",
        ip: ""
      }
    ]
  };

  errorMessage = () => {
    message.error("Não é permitido apagar esta linha");
  };

  remove = index => {
    console.log(index);
    const message = this.state.message;
    message.splice(index, 1);

    const fieldFalha = this.state.fieldFalha;
    fieldFalha.splice(index, 1);

    const dadosChip = this.state.dadosChip;
    dadosChip.splice(index, 1);

    this.setState({
      dadosChip,
      message,
      fieldFalha,
      quant: this.state.quant - 1
    });
  };

  handleChange = (value, e) => {
    const dadosChip = this.state.dadosChip;

    dadosChip[e.key] = {
      ...dadosChip[e.key],
      operadora: value
    };

    this.setState({
      dadosChip
    });
  };

  onChange = e => {
    const { nome, valor } = masks(e.target.name, e.target.value);

    const dadosChip = this.state.dadosChip;
    dadosChip[e.target.id] = {
      ...dadosChip[e.target.id],
      [nome]: valor
    };

    this.setState({
      dadosChip
    });
  };

  adicionarCarrinho = () => {
    const dadosChip = this.state.dadosChip;
    const message = this.state.message;
    const fieldFalha = this.state.fieldFalha;

    dadosChip.push({
      operadora: "Não selecionado",
      number: "",
      ip: ""
    });

    message.push({
      operadora: "",
      number: "",
      ip: ""
    });

    fieldFalha.push({
      operadora: false,
      number: false,
      ip: false
    });

    this.setState({
      dadosChip,
      message,
      fieldFalha,
      quant: this.state.quant + 1
    });
  };

  onBlurValidator = e => {
    console.log(e.target.name, e.target.value, this.state, e.target.id);
    const { nome, valor, fieldFalha, message, id } = validators(
      e.target.name,
      e.target.value,
      this.state,
      e.target.id
    );

    const dadosChip = this.state.dadosChip;

    dadosChip[id] = {
      ...dadosChip[id],
      [nome]: valor
    };

    this.setState({
      dadosChip,
      fieldFalha,
      message
    });
  };

  saveTargetNewEntryChip = async () => {
    const values = this.state.dadosChip;

    const resposta = await NovoChipService(values);

    if (resposta.status === 422) {
      const fieldFalha = this.state.fieldFalha;
      const message = this.state.message;

      fieldFalha.splice(
        resposta.data.fields[0].field.index,
        1,
        R.omit(["index"], resposta.data.fields[0].field)
      );
      message.splice(
        resposta.data.fields[0].field.index,
        1,
        R.omit(["index"], resposta.data.fields[0].message)
      );

      this.setState({
        messageError: true,
        fieldFalha,
        message
      });

      this.error();
    }
    if (resposta.status === 200) {
      this.setState({
        quant: 1,
        dadosChip: [
          {
            operadora: "Não selecionado",
            number: "",
            ip: ""
          }
        ],
        fieldFalha: [
          {
            operadora: false,
            number: false,
            ip: false
          }
        ],
        message: [
          {
            operadora: "",
            number: "",
            ip: ""
          }
        ]
      });

      this.success();
      // this.setState({
      //   loading:false,
      //   messageSuccess: false
      // })
    }
  };

  success = () => {
    message.success("O cadastro foi efetuado");
  };

  error = () => {
    message.error("erro ao efetuar o cadastro");
  };

  render() {
    console.log(this.state.fieldFalha, this.state.message);
    return (
      <div className="div-card-usuario">
        <div className="linhaTexto-usuario">
          <h1 className="h1-usuario">Entrada dos chips</h1>
        </div>

        <div className="linha3-entradaChips">
          <div className="div-quant-entradaChips">
            <div className="div-textRef-entradaChips">Quant:</div>
            <div className="div-inputs">
              <InputNumber disabled min={1} value={this.state.quant} />
            </div>
          </div>
        </div>

        <div className="div-separete"></div>

        <div className="div-linha-dados">Dados do chip</div>

        <div className="linha-entradaChips">
          <div className="div-nChip">Nº chip</div>
          <div className="div-ip">IP</div>
          <div className="div-operadora">Operadora</div>
          <div className="div-buttonAdd">Ações</div>
        </div>

        {this.state.dadosChip.map((item, index) => (
          <div className="div-linhas">
            <div className="linha2-entradaChips">
              <div className="div-nChip2">
                <Input
                  placeholder="Digite o nº"
                  name="number"
                  value={item.number}
                  id={index}
                  onChange={this.onChange}
                  className={
                    this.state.fieldFalha[index].number
                      ? "div-inputError-90"
                      : "input-90"
                  }
                  onBlur={this.onBlurValidator}
                  // onFocus={this.onFocus}
                  // className="input-90"
                />
              </div>
              <div className="div-ip2">
                <Input
                  placeholder="Digite o IP"
                  name="ip"
                  value={item.ip}
                  id={index}
                  onChange={this.onChange}
                  className={
                    this.state.fieldFalha[index].ip
                      ? "div-inputError-90"
                      : "input-90"
                  }
                  onBlur={this.onBlurValidator}
                />
              </div>
              <div className="div-operadora2">
                <Select
                  value={item.operadora}
                  style={{ width: "90%" }}
                  onChange={this.handleChange}
                >
                  <Option key={index} value="oi">
                    OI
                  </Option>
                  <Option key={index} value="claro">
                    CLARO
                  </Option>
                  <Option key={index} value="vivo">
                    VIVO
                  </Option>
                  <Option key={index} value="tim">
                    TIM
                  </Option>
                </Select>
              </div>
            </div>

            <div className="div-buttonAdd2">
              <Icon
                type="delete"
                onClick={
                  this.state.quant !== 1
                    ? () => this.remove(index)
                    : this.errorMessage
                }
              />
            </div>
          </div>
        ))}

        <div className="div-buttonAdd2">
          <Button
            className="button"
            type="primary"
            onClick={this.adicionarCarrinho}
          >
            Adicionar
          </Button>
          <Button
            className="button"
            type="primary"
            onClick={this.saveTargetNewEntryChip}
          >
            Concluir
          </Button>
        </div>
      </div>
    );
  }
}

export default EntradaChips;
