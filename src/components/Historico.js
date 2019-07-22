import React, { Component } from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom';

import '../css/Historico.css'

export default class Historico extends Component {

    constructor(){
        super()
        let his = localStorage.getItem('historico')
        if( his )
            his = JSON.parse(his)
        else
            his = []
        this.state = {lista:his}
    }

    formatData(data){
        let _data = data.split('-')
        return `${_data[2]}.${_data[1]}.${_data[0]}`
    }

    abrir(idx){
        console.log( idx )
    }

    render(){
        const lista = this.state.lista
        return (
            <section className='historico'>
                <Nav />
                <h2>
                    Historico
                </h2>
                {
                    lista.map( item => {
                     return (<div className="hisItem" key={item.indice}>
                        <div className="header">
                            {item.local} - {item.produtos.length} produtos <span className="data">{this.formatData(item.data)}</span>
                        </div>
                        <div className="body">
                            {
                                item.produtos.map( (p, i) => {
                                    return (
                                    <div className="hisProduto" key={i}>
                                        <div className="header">{p.nome}</div>
                                        <div className="body">{p.resultado}</div>
                                    </div>
                                    )
                                })
                            }
                        </div>
                        <Link to={ {pathname:'/', homeProps : item.indice} } replace>Abrir</Link>
                     </div>)
                    })
                }
            </section>
        )
    }
}
