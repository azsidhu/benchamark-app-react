
import React from 'react';
import '../styles/Header.css';
import { NavLink } from 'react-router-dom'

function Header({ history }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ paddingBottom: 0 }}>
            <p className="navbar-brand"><img src="https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt="" style={{ marginRight: 4 }} />
                
            </p>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item navItem">
                        <NavLink to="/fbconnect" className="nav-link navItemText" activeStyle={{
                            fontWeight: "bold",
                            color: "aquamarine"
                        }}>Facebook</NavLink>
                    </li>
                    <li className="nav-item navItem">
                        <NavLink to="/igconnect" className="nav-link navItemText" activeStyle={{
                            fontWeight: "bold",
                            color: "aquamarine"
                        }}>Instagram</NavLink>
                    </li>
                    <li className="nav-item navItem">
                        <NavLink to="/twconnect" className="nav-link navItemText" activeStyle={{
                            fontWeight: "bold",
                            color: "aquamarine"
                        }}>Twitter</NavLink>
                    </li>
                </ul>
            </div>
            <div style={{ float: 'right' }}>
                <NavLink to="/login" className="nav-link navItemText" style={{
                    fontWeight: "bold",
                    color: "#fff"
                }}>Logout</NavLink>
            </div>
        </nav>
    );
}


export default Header;