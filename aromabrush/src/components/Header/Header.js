import React from 'react';
//import { Link } from 'react-router-dom'
//import { useLocation } from 'react-router-dom';
//import Navigation from '../Navigation/Navigation'
//import headerLogo from '../../images/logo-header.svg';
//import BurgerMenu from '../BurgerMenu/BurgerMenu';
import logo from '../../images/4.svg'
import './Header.css';

function Header() {
  // const location = useLocation();
  //const path = location.pathname === '/';
  return (
    <header className="header">
      <div className="header__container">

        <img className="header__logo" src={logo} alt="Логотип" />

        <div className="header__info">

          <p className="header__about">8(499) 704 55 75</p>
          <div className="header__about-nav">
            <p className="header__about">О РАСЧЁСКАХ</p>
            <p to='/signin' className="header__about">О КОМПАНИИ</p>
            <p className="header__about">КОНТАКТЫ</p>
          </div>


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
