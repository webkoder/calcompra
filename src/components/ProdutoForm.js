import React, { Component } from 'react';
import '../css/ProdutoForm.css';

export default class ProdutoForm extends Component {

    constructor(props){
        super(props);
        this.state = {quantidade: 0.0, preco: 0.0, resultado: 0.0, nome: '', status: 'cadastroInicial'};
        this.props = props;
    }

    calculaResultado(e){
        let qnt = parseFloat(this.state.quantidade);
        if(isNaN(qnt)) return;

        let prc = parseFloat(this.state.preco);
        if(isNaN(prc)) return;

        let res = 0.0;        
        if(qnt > 0.0){
            res = Math.round(((prc / qnt) * 1000)) / 1000;
        }

        this.setState({
            resultado: res,
            quantidade: qnt,
            preco: prc,
        });
    }

    setValor(e){
        if( e.target.name === "quantidade" )
            this.setState({quantidade : e.target.value});
        else if ( e.target.name === "preco" )
            this.setState({preco : e.target.value});
    }

    checkValue(e){
        console.log(e.target.value);
    }

    setProduto(valor){
        this.setState({nome:valor});
    }

    Salvar(){
        if( this.state.status === 'cadastroFechado' || this.state.status === 'cadastroInicial' ){
            this.setState({status: 'cadastroAberto'});
            this.refs.txtNome.focus();
            return;
        }
        if( this.state.resultado === 0.0 ) return;
        this.props.onNovo(this.state);
        this.setState({quantidade: 0.0, preco: 0.0, resultado: 0.0, nome: ''});
    }

    Fechar(){

    }

    render(){
        return (
            <div className={this.state.status}>
            
                <button type="button"
                className="optbtn red right"
                onClick={() => this.setState({status: 'cadastroFechado'})}
                tabIndex='5'>X</button>

                <div className="name-control">
                    <span>Nome do Produto</span>
                    <input type="text" name='nome'
                        ref="txtNome"
                        tabIndex="1"
                        value={this.state.nome}
                        placeholder="digite o nome do produto"
                        onChange={ e => this.setProduto(e.target.value)}
                        onKeyPress={ e => { if(e.key === "Enter") this.refs.numQuantidade.focus() }  } />
                </div>

                <div className="ProdutoForm">
                    <div className="form-control">
                        <span>Quantidade</span>
                        
                        <input type="number" name='quantidade'
                            ref="numQuantidade"
                            value={this.state.quantidade}
                            onChange={ e => this.setValor(e)}
                            onFocus={e => {if( e.target.value === "0" ) e.target.value = ""} }
                            onBlur={ e => this.calculaResultado(e) }
                            onKeyPress={ e => { if(e.key === "Enter") this.refs.numPreco.focus() }  }
                            step="0.01" tabIndex='2' />
                    </div>
                    <div className="form-control">
                        <span>Preço</span>
                        <input type="number" name='preco' ref="numPreco"
                        value={this.state.preco}
                        onChange={ e => this.setValor(e)}
                        onFocus={e => {if( e.target.value === "0" ) e.target.value = ""} }
                        onBlur={ e => this.calculaResultado(e) }
                        step="0.01" tabIndex='3' />
                    </div>
                    <div className="form-control">
                        <span>Preço / Produto</span>
                        <input type="number" value={this.state.resultado} readOnly />
                    </div>
                </div>
                <div className="btn">
                    <button type="button"
                    onClick={() => this.Salvar()}
                    tabIndex='4'>adicionar</button>
                </div>
            </div>
        );
    }
}