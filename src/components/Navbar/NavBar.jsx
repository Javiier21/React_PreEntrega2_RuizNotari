import React from "react";
import CartWidget from "./CartWidget";
import classes from "./Navbar.module.css";

const NavBar = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <nav className="navbar">
            {/* Brand */}
            <div className="navbar-brand">
              <span>Tu Tienda</span>
            </div>

            {/* Listado de categorías clickeables */}
            <ul className="align-self-md-center d-flex flex-row justify-content-between navbar-nav w-50">
              <li className="nav-item">
                <a className="btn btn-success" href="/">Categoría 1</a>
              </li>
              <li className="nav-item">
                <a className="btn btn-success" href="/">Categoría 2</a>
              </li>
              <li className="nav-item">
                <a className="btn btn-success" href="/">Categoría 3</a>
              </li>
              {/* ... Agrega más categorías según sea necesario */}
            </ul>

            {/* CartWidget */}
            <CartWidget />
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
