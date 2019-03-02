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
                            logo
                        </div>
                        <nav className="nav">
                            <ul>
                                <li className="menu-link">Home</li>
                                <li className="menu-link">Testes</li>
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