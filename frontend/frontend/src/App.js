import React, { Component } from 'react';
import { Container } from 'reactstrap'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './App.css';
import Routers from './Routers';


// ! importa isso
import { BrowserRouter } from "react-router-dom";


import Loader from './components/helpers/Loader';



class App extends Component {


    constructor(props) {
        super(props);

        this.state = {
            user: null,
            loader: true
        }

        setTimeout(function(){
            alert('')
        }, 3000);
    }


    componentDidMount() {
        const user = sessionStorage.getItem('data')

        if (user) {
            const jsonUser = JSON.parse(user)
            this.setState({ user: jsonUser, loader: false })
        }
        else {
            this.setState({ loader: false })
        }
    }

    render() {
        return (
            this.state.loader ? (
                <Loader />
            ) : (
                    <BrowserRouter>
                        <div className="app">
                            <Header user={this.state.user ? this.state.user.data.user : null} />
                            <div id="main">
                                <Container>
                                    <Routers />
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

// * agora cria um comp chamado Routers
