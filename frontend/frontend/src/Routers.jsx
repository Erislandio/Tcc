import React from 'react'
import { Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Login from './components/login/Login'
import Sobre from './components/sobre/Sobre'
import Register from './components/login/Register'
import Contatos from './components/contatos/Contatos';
import Account from './components/account/Account';
import Camera from './components/teste/Camera';

export default props => (
    <Switch >
        <Route path="/home" component={Home} />
        <Route path="/sobre" component={Sobre} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/contatos" component={Contatos} />
        <Route path="/account" component={Account} />
        <Route path="/teste/camera" component={Camera} />
        <Route path="/teste/imagem" component={File} />
    </Switch>
)