import React, { Component } from 'react';
import SpotContato from './SpotContato';
import './contatos.css'

class Contatos extends Component {
    render() {
        return (
            <div className="contentos" id="contatos">
                <div className="content-contatos">
                    <div className="contatos">
                        <ul>
                           <SpotContato email="email@teste.com.br" name="erislandio soares"  desc="Estudante de ensino superior FATEC"/>
                           <SpotContato email="email@teste.com.br" name="tiago"  desc="Estudante de ensino superior FATEC"/>
                           <SpotContato email="email@teste.com.br" name="Ronaldo"  desc="Estudante de ensino superior FATEC"/>
                           <SpotContato email="email@teste.com.br" name="Wagner"  desc="Estudante de ensino superior FATEC"/>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contatos;