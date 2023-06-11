import React from "react";
import { Link } from "react-router-dom";
import './PopupMenu.css';

function PopupMenu({ isOpen, onMenuClick }) {
  return (
    <section className={`popup-menu ${isOpen ? 'popup-menu_is-opened' : ''}`}>
      <div className="popup-menu__container">
        <button className="popup-menu__close-button" type="button" onClick={onMenuClick} />
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
