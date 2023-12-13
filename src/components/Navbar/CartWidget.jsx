import React from 'react';

const CartWidget = () => {
  // Número hardcodeado (puedes ajustarlo más adelante)
  const cartItemCount = 3;

  // El icono no funciona
  return (
    <div className="cart-widget">      
      <i className="fas fa-shopping-cart"></i>
      <p>Ítems: {cartItemCount}</p>
    </div>
  );
}

export default CartWidget;
