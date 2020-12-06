import React from 'react';
import './App.css'

import Logo from '../templates/Logo';
import Nav from '../templates/Nav';
import Main from '../templates/Main';
import Footer from '../templates/Footer';

export default props => 
    <div className="app">
        <Logo />
        <Nav />
        <Main />
        <Footer />
    </div>