import React, { Component } from 'react';
import { Container } from 'reactstrap'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './App.css';
import Routers from './Routers';
import axios from 'axios'

import { BrowserRouter } from "react-router-dom";
import Loader from './components/helpers/Loader';

const base_url = "http://localhost:3000/results/result"


class App extends Component {


    constructor(props) {
        super(props);

        this.state = {
            user: null,
            loader: true,
            results: []
        }

    }

    componentDidMount() {
        const user = sessionStorage.getItem('data')

        if (user) {
            const jsonUser = JSON.parse(user)
            this.setState({ user: jsonUser, loader: false })

            const { data: { token } } = jsonUser

            let config = {
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`
                }
            }

            axios.get(
                base_url,
                config
            ).then(data => {

                const { data: { resultados } } = data

                if (resultados) {
                    this.setState({ results: resultados })
                } else {
                    return null
                }
            })
        }
        else {
            this.setState({ loader: false })
        }

    }

    render() {
        
        const { results } = this.state

        return (
            this.state.loader ? (
                <Loader />
            ) : (
                    <BrowserRouter>
                        <div className="app">
                            <Header user={this.state.user ? this.state.user.data.user : null} />
                            <div id="main">
                                <Container>
                                    <Routers results={results} />
                                </Container>
                            </div>
                            <Footer />
                        </div>
                    </BrowserRouter>
                )
        );
    }
}

export default App;

