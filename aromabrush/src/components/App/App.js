import React from 'react';
import { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useResize } from '../use-resize';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import PopupMenu from '../PopupMenu/PopupMenu';
import './App.css';

function App() {
  const { width } = useResize();
  const [isPopupMenuOpen, setIsPopupMenuOpen] = useState(false);

  window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY
    console.log(scrollDistance)
    const btnUp = document.querySelector('.page__button-scroll')
    console.log(btnUp)
    btnUp.onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  })

  function handleMenuClick() {
    setIsPopupMenuOpen(true);
    const promo = document.getElementById('main')
    promo.classList.add('main_blur')
    const buttonx = document.getElementById('x');
    buttonx.classList.remove('popup-menu__close-button_anim')
    const menu = document.getElementById('popup-menu');
    menu.classList.remove('popup-menu__container_anim')
    const burger = document.getElementById('burger');
    burger.classList.add('burger_open')
  }

  function handleCloseMenu() {
    setIsPopupMenuOpen(false);
    const buttonx = document.getElementById('x');
    console.log(buttonx)
    buttonx.classList.add('popup-menu__close-button_anim')
    const promo = document.getElementById('main')
    promo.classList.remove('main_blur')
    const menu = document.getElementById('popup-menu');
    menu.classList.add('popup-menu__container_anim')
    const popup = document.getElementById('popup')
    popup.classList.add('popup-menu_exit')
    const burger = document.getElementById('burger');
    burger.classList.remove('burger_open')
  }

  return (
    <div className="page" id="page">
      <div className="page__button-scroll" id="scroll"></div>
      <Header onMenuClick={handleMenuClick} />
      <PopupMenu isOpen={isPopupMenuOpen} onMenuClick={handleCloseMenu} />
      <Main
        width={width} />
      <Footer />
      <HelmetProvider>
        <div>
          <Helmet>
            <html lang="ru"></html>
            <title>Арома-расчёски бренда Solomeya</title>
            <meta name="description"
              content="Расчёски с ароматом SOLOMEYA от официального дистрибьютора в России компании Амарилис. Акции при покупке на сайте. Доставка: Москва и другие города.">
            </meta>
          </Helmet>
        </div>
      </HelmetProvider>
    </div>
  )
}
export default App;
