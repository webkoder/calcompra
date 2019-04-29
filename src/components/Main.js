import React, { Component } from 'react';
import '../App.css';
import ProdutoForm from './ProdutoForm';
import Produto from './Produto';
import ListaForm from './ListaForm';
import Nav from './Nav';
import '../css/Main.css';

export default class Main extends Component {

    constructor(){
        super();
        this.srcHistorico = null;
        this.state = {produtos : [], isSalvarForm:false, isHistorico:false};
    }

    AdicionarNovo(dados){
        let nproduto = new Produto();
        nproduto.quantidade = dados.quantidade;
        nproduto.preco = dados.preco;
        nproduto.resultado = dados.resultado;
        nproduto.nome = dados.nome;
        nproduto.indice = dados.indice | (this.state.produtos.length + 1);
        let _produtos = this.state.produtos;
        _produtos.push(nproduto);
        _produtos = [..._produtos].sort((a,b) => a.resultado - b.resultado);
        this.setState({produtos:_produtos});
    }

    Limpar(){
        this.setState({produtos:[], isSalvarForm: false});
    }

    SalvarCancelarDiag(){
        this.setState({isSalvarForm:false});
    }

    SalvarAbrirDiag(){
        this.setState({isSalvarForm:true});
    }

    Salvar(dados){
        if( this.state.produtos.length === 0 ) return;
        let _produtos = [];
        this.state.produtos.map(item => {
            return _produtos.push({quantidade: item.quantidade, preco: item.preco, resultado: item.resultado, nome: item.nome, indice: item.indice});
        });
        let his = localStorage.getItem('historico');
        if( !his ){
            his = [];
        }else{
            his = JSON.parse(his);
        }

        his.push({
            local: dados.local,
            data: dados.data,
            indice: (his.length + 1),
            produtos: _produtos
        });

        localStorage.setItem('historico', JSON.stringify(his));
        this.Limpar();

    }

    HistoricoAbrirDiag(){
        if( this.srcHistorico )
            this.srcHistorico.className = "HistoricoScreen";
        this.setState({isHistorico:true});
    }

    HistoricoFecharDiag(){
        this.srcHistorico.className = "HistoricoScreenClosed";
        // this.setState({isHistorico:false});
    }
    
    render(){
        const itens = this.state.produtos;
        return (
            <div>
                <Nav />
                <div className="MainScreen">
                    <ProdutoForm onNovo={e => this.AdicionarNovo(e)} />
                    <div className="ListaHeader">
                        <h2>
                            valores calculados
                        </h2>
                        <button className='optbtn green' onClick={() => this.SalvarAbrirDiag()}>salvar</button>
                        <button className='optbtn red' onClick={() => this.Limpar()}>limpar</button>
                    </div>
                    <div className="lista">
                        {
                            itens.map((item, i) => {
                                return (<Produto indice={i+1} nome={item.nome} quantidade={item.quantidade} preco={item.preco} resultado={item.resultado} key={item.indice} />);
                            })
                        }
                    </div>
                </div>
                
                { 
                    this.state.isSalvarForm &&
                        <ListaForm
                            onSalvar={dados => this.Salvar(dados)}
                            onCancelar={() => this.SalvarCancelarDiag()} />
                }
            </div>
        )
    }
}