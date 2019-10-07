import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Nav.css';

export default class Nav extends Component {
    render(){
        return (
            <nav>
                <NavLink exact to="/" className="navbtn" activeClassName="selected">Home</NavLink>
                <NavLink exact to="/historico" className="navbtn" activeClassName="selected">Historico</NavLink>
            </nav>
        );
    }
}