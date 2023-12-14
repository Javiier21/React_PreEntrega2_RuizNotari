import React from 'react';
import logo from '../../assets/react.svg'

const CartWidget = () => {
  // Número hardcodeado (puedes ajustarlo más adelante)
  const cartItemCount = 3;

  // El icono no funciona
  return (
    <div className="cart-widget d-flex align-items-center">      
      <img src={logo} className="icon-cart"></img>
      <p className="m-0 ps-3">Ítems: {cartItemCount}</p>
    </div>
  );
}

export default CartWidget;
