import React from 'react';
import CartWidget from './CartWidget/'

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Tienda Botanica</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a className="nav-link" href="/">Inicio</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/productos">Productos</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/contacto">Contacto</a>
            </li>
            <li className="nav-item">
                <CartWidget />
            </li>
            </ul>
        </div>
        </nav>
    );
}

export default NavBar;