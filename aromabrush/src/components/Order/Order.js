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

        <h3 className="order__title">ЗАКАЖИ НА МАРКЕТПЛЕЙСЕ</h3>

        <ul className="order__markets-container">

          <li className="order__market-element">
            <a className="order__market-link" href="https://amarylis.ru/" target="_blank">
            <img className="order__icon" src={yandex} alt="Яндекс-маркет"></img>
            </a>
          </li>

          <li className="order__market-element">
          <a className="order__market-link" href="https://amarylis.ru/" target="_blank">
          <img className="order__icon" src={ozon} alt="Озон"></img>
          </a>

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
            ЕСЛИ ТЫ <strong>ОПТОВЫЙ ПОКУПАТЕЛЬ</strong> - ПОЛУЧИ ДОСТУП К ПРАЙСУ
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
