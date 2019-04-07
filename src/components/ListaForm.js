import React, { Component } from 'react';

export default class ListaForm extends Component {

    constructor(props){
        super(props);
        let hoje = new Date();
        hoje = hoje.toISOString().split('T')[0];
        this.local = '';
        this.data = hoje;
        this.indice = 0;
        this.state = { local: '', data: hoje, indice: 0 };
    }

    Salvar(dados){
        this.props.onSalvar(this.state);
    }

    Cancelar(){
        this.props.onCancelar();
    }

    setLocal(v){
        this.setState({local:v});
    }
    
    setData(v){
        this.setState({data:v});
    }

    render(){
        return (
            <div className="ListaForm">
                <div className="wrapper">
                    <h2 className="mb2">Salvar no histórico</h2>
                    <div className="name-control mb2">
                        <span>Local</span>
                        <input type="text" name='local' value={this.state.local} placeholder="digite o local das compras" onChange={ e => this.setLocal(e.target.value)} />
                    </div>

                    <div className="name-control mb2">
                        <span>data</span>
                        <input type="date" name='data' value={this.state.data} onChange={ e => this.setData(e.target.value)} />
                    </div>
                    <div className="btn">
                        <button type="button" onClick={() => this.Salvar()}>Salvar & Limpar</button>
                        <button type="button" className="red" onClick={() => this.Cancelar()}>Cancelar</button>
                    </div>
                </div>
                {/* <div className="bg"></div> */}
            
            </div>
        );
    }
}