import React from 'react'
import Home from "./components/home/Home";
import Login from './components/login/Login'
import Sobre from './components/sobre/Sobre'
import Register from './components/login/Register'
import Contatos from './components/contatos/Contatos';
import Account from './components/account/Account';
import Camera from './components/teste/Camera';

import { Switch, Route, Redirect } from "react-router-dom";


export default props => (
    <Switch >
        <Route path="/sobre" component={Sobre} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/contatos" component={Contatos} />
        <Route path="/account" render={() => <Account results={props} />} />
        <Route path="/teste/camera" component={Camera} />
        <Route path="/teste/file" component={File} />
        {
            props ? (
                <Redirect to="/account" />
            ) : (
                    <Redirect to="/login" />

                )
        }
    </Switch>
)