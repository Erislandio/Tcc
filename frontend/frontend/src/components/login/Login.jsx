import { Link } from "react-router-dom";
import React, { Component } from 'react';
import './login.css'

class Login extends Component {
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
                        <h3 className="login-title">Login</h3>
                        <div className="inputs">
                            <span className="span-label">
                                <input required="true" type="text" placeholder="email" />
                            </span>
                            <span className="span-label">
                                <input required="true" type="password" placeholder="senha" />
                            </span>
                            <span className="span-label">
                                <button type="submit" className="btn btn-login">Entrar</button>
                            </span>
                            <span className="reset-pass">
                                Ainda não tem cadastro?
                                <Link className="register-link" to="/register/">
                                    Clique aqui!
                                </Link>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;