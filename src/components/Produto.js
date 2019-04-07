import React, { Component } from 'react';

export default class Produto extends Component {

    constructor(){
        super();
        this.quantidade = 0;
        this.preco = 0;
        this.resultado = 0;
        this.nome = 'Produto';
        this.indice = 0;
    }

    componentWillMount(){
        this.quantidade = this.props.quantidade;
        this.preco = this.props.preco;
        this.resultado = this.props.resultado;
        this.nome = this.props.nome;
        this.indice = this.props.indice;
    }

    render(){
        return (
            <section className="Produto">
                <div className="header">
                    {this.indice}. {this.nome}
                </div>
                <div className="body">
                    <span className="info">{this.quantidade} / R$ {this.preco}</span>
                    <span className="result">{this.resultado}</span>
                </div>
            </section>
        );
    }
}