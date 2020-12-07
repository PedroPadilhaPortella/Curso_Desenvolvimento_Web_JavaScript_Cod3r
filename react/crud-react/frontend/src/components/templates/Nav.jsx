import React from 'react';
import './Nav.css';
import NavItem from './NavItem';

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavItem icon="home" link="Início" route=""/>
            <NavItem icon="users" link="Usuários" route="users"/>
        </nav>
    </aside>