import React from "react";
import { Link } from "react-router-dom";
import './PopupMenu.css';

function PopupMenu({ isOpen, onMenuClick }) {

  var elem = document.getElementById("popup")
  console.log(elem);

  const buttons = Array.from(document.querySelectorAll('.popup-menu__close-button'));
  buttons.forEach(function (button) {
    button.onclick = function () {
      console.log('hello world');
    }
  });

  // function popup(){
  // if(elem.classList.contains('popup-menu_is-opened')){
  //   console.log('Открыт')
  // }
  //}
  //popup()

  return (
    <section className={`popup-menu ${isOpen ? 'popup-menu_is-opened' : ''}`} id="popup">
      <div className="popup-menu__container">
        <ul className="popup-menu__list">
          <li className="popup-menu__list-container" id="popup-menu">
            <p className="popup-menu__list-link popup-menu__list-link_red" onClick={onMenuClick}><a className="popup-menu__list-links" href="#aboutbrush">О РАСЧЁСКАХ</a></p>
            <p className="popup-menu__list-link" onClick={onMenuClick}><a className="popup-menu__list-links" href="#aboutcompany">О КОМПАНИИ</a></p>
            <p className="popup-menu__list-link" onClick={onMenuClick}><a className="popup-menu__list-links" href="#contacts">КОНТАКТЫ</a></p>
          </li>
        </ul>
        <button className="popup-menu__close-button" type="button" onClick={onMenuClick} id="x" />

      </div>
    </section>
  );
}

export default PopupMenu;
