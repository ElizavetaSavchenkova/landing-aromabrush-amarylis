import React from 'react';
import './Order.css'
import yandex from '../../images/yandex.svg'
import sber from '../../images/sber.svg'
import ozon from '../../images/ozon.svg'
import wb from '../../images/wb.svg'

import wb1 from '../../images/wb-market.svg'
import sber1 from '../../images/sber-market.svg'
import ozon1 from '../../images/ozon-market.svg'
import yandex1 from '../../images/yandex-market.svg'

function Order() {
  return (
    <section className="order">

      <div className="order__container">

        <h3 className="order__title">ЗАКАЖИ НА МАРКЕТПЛЕЙСЕ</h3>

        <ul className="order__markets-container">

          <li className="order__market-element">
            <a className="order__market-link" href="https://amarylis.ru/" target="_blank">
              <img className="order__icon" src={yandex1} alt="Яндекс-маркет"></img>
            </a>
          </li>

          <li className="order__market-element">
            <a className="order__market-link" href="https://amarylis.ru/" target="_blank">
              <img className="order__icon" src={ozon1} alt="Озон"></img>
            </a>

          </li>
          <li className="order__market-element">
            <img className="order__icon" src={wb1}></img>
          </li>
          <li className="order__market-element">
            <img className="order__icon" src={sber1}></img>
          </li>
        </ul>

        <div className="order__description-container">
          <h4 className="order__descripton-text">
            ЕСЛИ ТЫ <strong>ОПТОВЫЙ ПОКУПАТЕЛЬ - </strong>ПОЛУЧИ ДОСТУП К ПРАЙСУ
          </h4>

          <div className="order__button">
            <a href="https://amarylis.ru/" className="order__button-link">КУПИТЬ ОПТОМ</a>
          </div>
        </div>

      </div>



    </section>
  )
}

export default Order
