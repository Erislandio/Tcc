import React, { Component } from 'react';
import { Container } from 'reactstrap'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './App.css';
import Routers from './Routers';


import { BrowserRouter } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header />
          <div id="main">
            <Container>
              <Routers />
            </Container>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
