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
        <button className="popup-menu__close-button" type="button" onClick={onMenuClick} id="x" />
        <ul className="popup-menu__list">
          <li className="popup-menu__list-container">
            <p className="popup-menu__list-link popup-menu__list-link_red" onClick={onMenuClick}>О РАСЧЁСКАХ</p>
            <p className="popup-menu__list-link" onClick={onMenuClick}>О КОМПАНИИ</p>
            <p className="popup-menu__list-link" onClick={onMenuClick}>КОНТАКТЫ</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default PopupMenu;
