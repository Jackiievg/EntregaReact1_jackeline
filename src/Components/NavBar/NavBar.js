import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to={"/"}>Tienda Botanica</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link" to={"/category/Plantas"}>Plantas</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/category/productos"}>Productos</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/categoy/deco"}>Deco</Link>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/Carrito"><CartWidget/></NavLink>
            </li>
            </ul>
        </div>
        </nav>
    );
}

export default NavBar;