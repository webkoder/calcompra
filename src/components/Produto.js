import React, { Component } from 'react';
import '../css/Produto.css';

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
        if( this.nome === 0) this.nome = "Produto";
        else if( this.nome === "") this.nome = "Produto";
    }

    render(){
        console.log( this.nome )
        return (
            <section className="Produto">
                <div className="icon">
                    <span>{this.indice}</span>
                </div>
                <div className="content">
                    <div className="header">
                        {this.nome }
                    </div>
                    <div className="body">
                        <span className="info">{this.quantidade} / R$ {this.preco}</span>
                        <span className="result">{this.resultado}</span>
                    </div>
                </div>
            </section>
        );
    }
}