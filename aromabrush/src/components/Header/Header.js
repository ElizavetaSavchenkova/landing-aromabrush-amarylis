import React from 'react';
//import { Link } from 'react-router-dom'
//import { useLocation } from 'react-router-dom';
//import Navigation from '../Navigation/Navigation'
//import headerLogo from '../../images/logo-header.svg';
//import BurgerMenu from '../BurgerMenu/BurgerMenu';
import logo from '../../images/logo1.svg';
import telegramIcon from '../../images/header-icon-telegram.svg';
import whatsappIcon from '../../images/header-icon-whatsapp.svg';
import './Header.css';
import icon from '../../images/krug.svg'

function Header() {
  // const location = useLocation();
  //const path = location.pathname === '/';
  return (
    <header className="header">
      <div className="header__container">
        <img className="header__logo" src={logo} alt="Логотип компании 'Amarylis'" />

        <div className="header__container-main">
          <div className="header__cont">
            <a className="header__element-phone">8(499) 704 55 75</a>
            <img className="header__icon" src={telegramIcon} alt="Telegram" />
            <img className="header__icon" src={whatsappIcon} alt="Whatsapp" />
          </div>
          <nav className="header__menu">
          <ul className="header__list">
            <li className="header__list-element"><a className="header__list-link" href="#">О РАСЧЁСКАХ</a></li>
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


//function Header({ loggedIn, onMenuClick }) {
 // const location = useLocation();
 // const path = location.pathname === '/';
  //return (
   // <header className={`header ${loggedIn ? "header_theme_light" : ""} && ${path ? "header_theme_new" : ""}`}>
     //</header> <div className="header__container">
      //  <Link to="/">
      // /   <img className="header__logo" src={headerLogo} alt="Логотип" />
       // </Link>
      //  {!loggedIn &&
      //    <div className="header__info">
       //  //   <Link to="/signup" className="header__registration">Регистрация</Link>
          //  <Link to='/signin' className="header__login">Войти</Link>
       //   </div>
      //  }
      //  {loggedIn &&
    //      <>
      //      <Navigation />
       //     <BurgerMenu onMenuClick={onMenuClick} />
     //     </>
    //    }
    //  </div>
   // </header >
  //)
//}

//export default Header
