//import logo from './logo.svg';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useResize } from '../use-resize';
//import { useResize } from './use-resize';
//import { Helmet } from 'react-helmet';
//import { hydrate, render } from "react-dom";
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import icon from '../../images/krug.svg'
import Footer from '../Footer/Footer';
import PopupMenu from '../PopupMenu/PopupMenu'



function App({ onMenuClick }) {

  const { width } = useResize();

  const [start, setStart] = useState(false)
  const [isPopupMenuOpen, setIsPopupMenuOpen] = useState(false);

  // addEventListener('scroll',() => {
  // let hue = content.getBoundingClientRect().top/22;
  // main.style.background = `linear-gradient(45deg, white, hsl(${hue},100%,50%))`;
  // });

  //const rootElement = document.getElementById("root");
  //if (rootElement.hasChildNodes()) {
  //  hydrate(<App />, rootElement);
  //} else {
  //  render(<App />, rootElement);
  // }
  //

  //window.onscroll = function() {
  // if ((window).scrollTop() > 400){
  // ('.header').css({'background-color': 'white'} )
  // }else{
  // ('.header').css({'background-color': 'black'})
  //};

  //}

  useEffect(()=> {
    console.log(width)
    console.log('width')
  }, [width])

  console.log(window.innerWidth);

  function menu() {
    if (window.innerWidth === 1440) {
      console.log('Разрешение')
    }
  }

  useEffect(() => {
    menu()
  }, [])

  window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY
    console.log(scrollDistance)
    if ((scrollDistance > 1000) && (scrollDistance < 2000)) {
      console.log(scrollDistance)
      const header = document.querySelector('header');
      console.log(header)
      header.classList.add('header__black')
    } else {
      const header = document.querySelector('header');
      header.classList.remove('header__black')
    }
  })

  //
  // window.addEventListener("resize", AutoScale);
  // AutoScale();

  // function AutoScale() {
  // let width = window.screen.width; //Ширина окна
  //Если вы хотите проверять по размеру экрана, то вам нужно свойство window.screen.width

  // if (width > 1280)
  // console.log('1380')

  //}

  // const [windowWidth, setWindowWidth] = React.useState(window.screen.width);

  //React.useEffect(() => {
  //  window.onresize = () => { setWindowWidth(window.screen.width) };
  //   console.log('header')

  //   return () => { window.onresize = false };
  // }, [windowWidth]);

  // useEffect(()=> {
  //   if(windowWidth >=950 ){

  //   }
  // })





  function handleMenuClick() {
    setIsPopupMenuOpen(true);
    const promo = document.getElementById('main')
    console.log(promo)
    promo.classList.add('main_blur')
    const buttonx = document.getElementById('x');
    console.log(buttonx)
    buttonx.classList.remove("popup-menu__close-button_anim")
    const menu = document.getElementById('popup-menu');
    menu.classList.remove('popup-menu__container_anim')
  }



  function handleCloseMenu() {
    setIsPopupMenuOpen(false);
    const buttonx = document.getElementById('x');
    console.log(buttonx)
    buttonx.classList.add("popup-menu__close-button_anim")
    const promo = document.getElementById('main')
    promo.classList.remove('main_blur')
    const menu = document.getElementById('popup-menu');
    menu.classList.add('popup-menu__container_anim')
    const popup = document.getElementById('popup')
    popup.classList.add('popup-menu_exit')
    }






  //const { width, isScreenSm, isScreenMd, isScreenLg, isScreenXl } = useResize();

  return (
    <div className="page" id="page" >width:{width}

      <Header onMenuClick={handleMenuClick} />
      <PopupMenu isOpen={isPopupMenuOpen} onMenuClick={handleCloseMenu} />

      <Main
        start={start}
        width={width}/>

      <Footer />


    </div>
  )
}
export default App;
