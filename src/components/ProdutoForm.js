import React, { Component } from 'react';
import '../css/ProdutoForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faDollarSign, faEquals, faChevronUp, faChevronDown }
    from '@fortawesome/free-solid-svg-icons';

export default class ProdutoForm extends Component {

    constructor(props){
        super(props);
        this.state = {quantidade: 0.0, preco: 0.0, resultado: 0.0, nome: '', status: 'cadastroAberto'};
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
                        <div className="icon">
                            <FontAwesomeIcon icon={faBox} size="2x" inverse />
                        </div>
                        <div className="content">
                            <span>Quantidade</span>
                            <div>
                                <input type="number" name='quantidade'
                                    ref="numQuantidade"
                                    value={this.state.quantidade}
                                    onChange={ e => this.setValor(e)}
                                    onFocus={e => {if( e.target.value === "0" ) e.target.value = ""} }
                                    onBlur={ e => this.calculaResultado(e) }
                                    onKeyPress={ e => { if(e.key === "Enter") this.refs.numPreco.focus() }  }
                                    step="0.01" tabIndex='2' />
                            </div>
                        </div>
                    </div>
                    <div className="form-control">
                        <div className="icon">
                            <FontAwesomeIcon icon={faDollarSign} size="2x" inverse />
                        </div>
                        <div className="content">
                            <span>Preço</span>
                            <div>
                                <input type="number" name='preco' ref="numPreco"
                                value={this.state.preco}
                                onChange={ e => this.setValor(e)}
                                onFocus={e => {if( e.target.value === "0" ) e.target.value = ""} }
                                onBlur={ e => this.calculaResultado(e) }
                                step="0.01" tabIndex='3' />
                            </div>
                        </div>
                    </div>
                    <div className="form-control">
                        <div className="icon">
                            <FontAwesomeIcon icon={faEquals} size="2x" inverse />
                        </div>
                        <div className="content">
                            <span>Preço / Produto</span>
                            <div>
                                <input type="number" value={this.state.resultado} readOnly />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btn">
                    <button type="button" className=" border-white"
                    onClick={() => this.Salvar()}
                    tabIndex='4'>adicionar</button>

                    <button type="button"
                    className="optbtn border-white"
                    onClick={() => this.setState({status: 'cadastroFechado'})}
                    tabIndex='5'>
                        <FontAwesomeIcon icon={faChevronUp} invert size='2x' />
                    </button>
                </div>
            </div>
        );
    }
}