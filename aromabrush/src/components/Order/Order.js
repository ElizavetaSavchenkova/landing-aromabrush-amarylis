import React from 'react';
import './Order.css'
import yandex from '../../images/yandex.svg'
import sber from '../../images/sber.svg'
import ozon from '../../images/ozon.svg'
import wb from '../../images/wb.svg'

function Order() {
  return (
    <section className="order">
      <div className="order__container">
        <h4 className="order__title">ЗАКАЖИ НА МАРКЕТПЛЕЙСЕ</h4>
        <ul className="order__market">
          <li className="order__market-element">
            <img className="order__icon" src={yandex}></img>
          </li>
          <li className="order__market-element">
            <img className="order__icon" src={ozon}></img>
          </li>
          <li className="order__market-element">
            <img className="order__icon" src={wb}></img>
          </li>
          <li className="order__market-element">
            <img className="order__icon" src={sber}></img>
          </li>
        </ul>
        <div className="order__text">
          <h4 className="order__text-sub">
            ЕСЛИ ТЫ ОПТОВЫЙ ПОКУПАТЕЛЬ - ПОЛУЧИ ДОСТУП К ПРАЙСУ
          </h4>
          <button className="order__button">
            КУПИТЬ ОПТОМ
          </button>
        </div>
      </div>



    </section>
  )
}

export default Order
