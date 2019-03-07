import React, { Component } from 'react';
import './header.css'

import { Container } from 'reactstrap'

class Header extends Component {
    render() {
        return (
            <header className="header">
                <Container>
                    <div className="header-content container">
                        <div className="logo">
                            <a href="#">
                                <img src="https://ronaldo-caetano.000webhostapp.com/Logo%20png.png" height="50" width="130" alt="SeEye" />
                            </a>
                        </div>
                        <nav className="nav">
                            <ul>
                                <li className="menu-link">Home</li>
                                <li className="menu-link">
                                    Testes
                                    <div className="dropdown-menu-1">
                                        <ul>
                                            <li>Camera</li>
                                            <li>Imagem</li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="menu-link">Contato</li>
                                <li className="menu-link">Sobre</li>
                            </ul>
                        </nav>
                        <div className="login">
                            login
                    </div>
                    </div>
                </Container>
            </header>
        );
    }
}

export default Header;