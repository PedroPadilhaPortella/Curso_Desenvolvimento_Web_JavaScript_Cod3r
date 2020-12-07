import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';
import Logo from '../../assets/images/logo.png'

export default props =>
    <aside className="logo">
        <Link to="/" className="logo">
            <img src={Logo} alt="logo"/>
        </Link>
    </aside>