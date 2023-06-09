import React from 'react';
import headerLogo from '../../images/header-logo.svg';
import telegramIcon from '../../images/header-icon-telegram.svg';
import whatsappIcon from '../../images/header-icon-whatsapp.svg';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img className="header__logo" src={headerLogo} alt="Логотип компании 'Amarylis'" />
        <div className="header__info">
          <ul className="header__info-container">
            <li className="header__info-container-el"><span className="header__info-container-telephone">8(499) 704 55 75</span></li>
            <li className="header__info-container-el"><a href="https://amarylis.ru/"><img className="header__icon" src={telegramIcon} alt="Telegram" /></a></li>
            <li className="header__info-container-el"><a href="https://amarylis.ru/"><img className="header__icon" src={whatsappIcon} alt="Whatsapp" /></a></li>
          </ul>
          <nav className="header__menu">
            <ul className="header__menu-list">
              <li className="header__list-element"><a className="header__list-link" href="https://amarylis.ru/">О РАСЧЁСКАХ</a></li>
              <li className="header__list-element"><a className="header__list-link" href="https://amarylis.ru/">О КОМПАНИИ</a></li>
              <li className="header__list-element "><a className="header__list-link" href="https://amarylis.ru/contacts/">КОНТАКТЫ</a></li>
            </ul>
          </nav >
        </div>
      </div>
    </header >
  )
}

export default Header
