import React, { Component } from 'react';
import NumericInput from 'react-numeric-input';

export default class ProdutoForm extends Component {

    constructor(props){
        super(props);
        this.state = {quantidade: 0.0, preco: 0.0, resultado: 0.0, nome: ''};
        this.props = props;
    }

    calculaResultado(e){

        let valor = e.nativeEvent.data;
        
        let qnt = this.state.quantidade;
        if( e.target.name === "quantidade"){
            qnt = parseFloat(e.target.value);
            if(isNaN(qnt)) return;
            e.target.value = qnt;
        }

        let prc = this.state.preco;
        if( e.target.name === "preco" ){
            prc = parseFloat(e.target.value);
            if(isNaN(prc)) return;
            e.target.value = prc;
        }

        let res = 0.0;        
        if(prc > 0.0){
            res = Math.round(((qnt / prc) * 1000)) / 1000;
        }

        this.setState({
            resultado: res,
            quantidade: qnt,
            preco: prc,
        });
    }

    checkValue(e){
        console.log(e.target.value);
    }

    setProduto(valor){
        this.setState({nome:valor});
    }

    Salvar(){
        if( this.state.resultado === 0.0 ) return;
        this.props.onNovo(this.state);
        this.setState({quantidade: 0.0, preco: 0.0, resultado: 0.0, nome: ''});
    }

    render(){
        return (
            <div>
                <div className="name-control">
                    <span>Nome do Produto</span>
                    <input type="text" name='nome' value={this.state.nome} placeholder="digite o nome do produto" onChange={ e => this.setProduto(e.target.value)} />
                </div>

                <div className="ProdutoForm">
                    <div className="form-control">
                        <span>Quantidade</span>
                        
                        <NumericInput step={0.01} precision={2} />
                    </div>
                    <div className="form-control">
                        <span>Preço</span>
                        <input type="number" name='preco' value={this.state.preco} onChange={ e => this.calculaResultado(e)} />
                    </div>
                    <div className="form-control">
                        <span>Preço / Produto</span>
                        <input type="number" value={this.state.resultado} readOnly />
                    </div>
                </div>
                <div className="btn">
                    <button type="button" onClick={() => this.Salvar()}>adicionar</button>
                </div>
            </div>
        );
    }
}