import React from "react";
import CartWidget from "./CartWidget";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <nav className="navbar">
            {/* Brand */}
            <div className="navbar-brand">
              <Link className="text-decoration-none text-black" to='/'>Ecommerce</Link>
            </div>

            {/* Listado de categorías clickeables */}
            <ul className="align-self-md-center d-flex flex-row justify-content-between navbar-nav w-50">
              <li className="nav-item">
                <Link to='/category/celular' className="btn btn-success" href="/">Celulares</Link>
              </li>
              <li className="nav-item">
                <Link to='/category/tablet' className="btn btn-success" href="/">Tablets</Link>
              </li>
              <li className="nav-item">
                <Link to='/category/notebook' className="btn btn-success" href="/">Notebooks</Link>
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
