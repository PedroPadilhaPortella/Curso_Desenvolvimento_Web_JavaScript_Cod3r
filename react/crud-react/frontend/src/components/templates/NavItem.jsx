import React from 'react';
import { Link } from 'react-router-dom';
import './NavItem.css';

export default props =>
    <Link to={`/${props.route}`}>
        <i className={`fa fa-${props.icon}`}></i> {props.link}
    </Link>