
import React from 'react';
import '../styles/Header.css';
import { NavLink } from 'react-router-dom';
import CustomNavLink from './CustomNavLink';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark topNav">
            <p className="navbar-brand">
                <img src="https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt="" style={{ marginRight: 4 }} />
            </p>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item navItem">
                        <CustomNavLink to="/fbconnect" text="Facebook"></CustomNavLink>
                    </li>
                    <li className="nav-item navItem">
                        <CustomNavLink to="/igconnect" text="Instagram"></CustomNavLink>
                    </li>
                    <li className="nav-item navItem">
                        <CustomNavLink to="/twconnect" text="Twitter"></CustomNavLink>
                    </li>
                </ul>
            </div>
            <div className="logoutDiv">
                <NavLink to="/login" className="nav-link logoutText">Logout</NavLink>
            </div>
        </nav>
    );
}


export default Header;