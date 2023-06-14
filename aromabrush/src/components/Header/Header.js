import React from 'react';
import { useState, useEffect } from 'react';
import headerLogo from '../../images/header-logo.svg';
import telegramIcon from '../../images/header-icon-telegram.svg';
import whatsappIcon from '../../images/header-icon-whatsapp.svg';
import './Header.css';
import BurgerMenu from '../BurgerMenu/BurggerMenu';
import { useResize } from '../use-resize';

function Header({onMenuClick}) {

  //const [start, setStart] = useState(false)

  //window.addEventListener("resize", AutoScale);
  //AutoScale();

  //function AutoScale() {
  // let width = window.screen.width; //Ширина окна
  //Если вы хотите проверять по размеру экрана, то вам нужно свойство window.screen.width

  /// if (width > 1280)
  //  console.log('1380')
  //  setStart(true)

  //}

  // const [start, setStart] = useState(false)
  //  const [width, setWidth] = useState(window.innerWidth);
  //const [amount, setAmount] = useState(12);


  //const useResize = () => {
  // const [width, setWidth] = useState(window.innerWidth);

  // useEffect(() => {
  // const handleResize = (event) => {
  //   setWidth(event.target.innerWidth);
  // };
  // /window.addEventListener('resize', handleResize);
  //return () => {
  //  window.removeEventListener('resize', handleResize);
  // };
  //}, []);

  // return {
  //  width,
  //  isScreenSm: width >= 320
  //  isScreenMd: width >= 1000
  //  isScreenLg: width >= 13000
  //};
  // };




  //function throttle(func, timeout) {
  // let timer = null
  // return function (...args) {
  ////  if (!timer) {
  //timer = setTimeout(() => {
  //  func.call(this, ...args)
  //  timer = null
  //}, timeout)
  // }
  // }
  //}

  //useEffect(() => {
  // const updateWidth = throttle(() => {
  //  setWidth(window.innerWidth);
  //}, 500);
  // window.addEventListener('resize', updateWidth);
  // return () => window.removeEventListener('resize', updateWidth);
  //}, []);

  // const big = windowWidth >= 951
  // const min = windowWidth <= 950

  const { width, isScreenMy2, isScreenSm, isScreenMd, isScreenMy, isScreenLg, isScreenXl } = useResize();

  return (
    <header className="header">
      {isScreenMy2 &&
        <div className="header__container">
          <img className="header__logo" src={headerLogo} alt="Логотип компании 'Amarylis'" />
          <div className="header__info">
            <ul className="header__info-container">
              <li className="header__info-container-el"><span className="header__info-container-telephone">8(499) 704 55 75</span></li>
              <li className="header__info-container-el"><a href="https://t.me/amarylis_ru?utm_source=wa&utm_campaign=aroma_rascheski"><img className="header__icon" src={telegramIcon} alt="Telegram" /></a></li>
              <li className="header__info-container-el"><a href="https://wa.me/79269959588?utm_source=wa&utm_campaign=aroma_rascheski"><img className="header__icon" src={whatsappIcon} alt="Whatsapp" /></a></li>
            </ul>
            <nav className="header__menu">
              <ul className="header__menu-list">
                <li className="header__list-element"><a className="header__list-link" href="#aboutbrush">О РАСЧЁСКАХ</a></li>
                <li className="header__list-element"><a className="header__list-link" href="#aboutcompany">О КОМПАНИИ</a></li>
                <li className="header__list-element "><a className="header__list-link" href="#contacts">КОНТАКТЫ</a></li>
              </ul>
            </nav >
          </div>
        </div>}
      {isScreenMy &&
        <div className="header__container">
          <img className="header__logo" src={headerLogo} alt="Логотип компании 'Amarylis'" />
          <BurgerMenu onMenuClick={onMenuClick}/>
        </div>}

    </header >
  )
}

export default Header


// const [start, setStart] = useState(false)

 // function menu() {
  //  if (window.innerWidth === 1100) {
    //  setStart(true)
     // console.log('works')
    //}
  //}
//
 // useEffect(() => {
  //  menu()
  //}, [])

  //useEffect(() => {
   // console.log('РАБОТА')
 // }, [])

 // window.addEventListener('scroll', () => {
   // let scrollDistance = window.scrollY
   // console.log(scrollDistance)
 //   if (scrollDistance > 2) {
   //   setStart(true)
   //   console.log('Работает')
  //  }
  //})


 // const [amount, setAmount] = useState(12);


  //const useResize = () => {
  // const [width, setWidth] = useState(window.innerWidth);

  // useEffect(() => {
  // const handleResize = (event) => {
  //   setWidth(event.target.innerWidth);
  // };
  // /window.addEventListener('resize', handleResize);
  //return () => {
  //  window.removeEventListener('resize', handleResize);
  // };
  //}, []);

  // return {
  //  width,
  //  isScreenSm: width >= 320
  //  isScreenMd: width >= 1000
  //  isScreenLg: width >= 13000
  //};
  // };
