import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Register extends Component {
    render() {
        return (
            <div className="login-form">
                <form className="form-login">
                    <div className="content-login">
                        <span className="logo-login">
                            <Link to="/home/">
                                <img src="https://ronaldo-caetano.000webhostapp.com/Logo%20png.png" height="25" width="65" alt="SeEye" />
                            </Link>
                        </span>
                        <h3 className="login-title">Welcome!</h3>
                        <div className="inputs">
                            <span className="span-label">
                                <input required="true" type="text" placeholder="Nome" />
                            </span>
                            <span className="span-label">
                                <input required="true" type="text" placeholder="Email" />
                            </span>
                            <span className="span-label">
                                <input required="true" type="password" placeholder="Senha" />
                            </span>
                            <span className="span-label">
                                <button type="submit" className="btn btn-login register">Criar</button>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Register;