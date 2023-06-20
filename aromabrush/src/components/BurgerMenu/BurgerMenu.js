import React from 'react';
import './BurgerMenu.css';

function BurgerMenu({ onMenuClick }) {
  return (
    <div className="burger-menu" onClick={onMenuClick} id="burger" />
  )
}

export default BurgerMenu
