import React from 'react';
import { useResize } from '../use-resize';
import headerLogo from '../../images/header-logo.svg';
import telegramIcon from '../../images/tel-header.svg';
import whatsappIcon from '../../images/whats-header.svg';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import './Header.css';

function Header({ onMenuClick }) {
  const { isScreenMy2, isScreenMy } = useResize();

  return (
    <header className="header">
      {isScreenMy2 &&
        <div className="header__container">
          <img className="header__logo" src={headerLogo} alt="Логотип компании 'Amarylis'" />
          <div className="header__info">
            <ul className="header__info-container">
              <li className="header__info-container-el"><span className="header__info-container-telephone">8(499) 704 55 75</span></li>
              <li className="header__info-container-el"><a href="https://t.me/amarylis_ru?utm_source=wa&utm_campaign=aroma_rascheski"><img className="header__icon" src={telegramIcon} alt="Telegram" /></a></li>
              <li className="header__info-container-el"><a href="https://wa.me/79269959588?utm_source=wa&utm_campaign=aroma_rascheski"><img className="header__icon" src={whatsappIcon} alt="WhatsApp" /></a></li>
            </ul>
            <nav className="header__menu">
              <ul className="header__menu-list">
                <li className="header__list-element"><a className="header__list-link" href="#aboutbrush">О РАСЧЁСКАХ</a></li>
                <li className="header__list-element"><a className="header__list-link" href="#aboutcompany">О КОМПАНИИ</a></li>
                <li className="header__list-element"><a className="header__list-link" href="#contacts">КОНТАКТЫ</a></li>
              </ul>
            </nav >
          </div>
        </div>}
      {isScreenMy &&
        <div className="header__container">
          <img className="header__logo" src={headerLogo} alt="Логотип компании 'Amarylis'" />
          <BurgerMenu onMenuClick={onMenuClick} />
        </div>}

    </header >
  )
}

export default Header
