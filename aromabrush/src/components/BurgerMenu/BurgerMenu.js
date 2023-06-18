import React from 'react';
import './BurgerMenu.css';
//import burgerIcon1 from '../../images/burger.svg'
//import burgerIcon2 from '../../images/burger2.svg'

function BurgerMenu({ onMenuClick }) {



  return (
    <div className="burger-menu" onClick={onMenuClick} id="burger" />
  )
}

export default BurgerMenu
