import React from 'react';
import { useResize } from '../use-resize';
import wbOrder from '../../images/wb-market-order.svg'
import sbermarketOrder from '../../images/sbermarket-market-order.svg'
import ozonOrder from '../../images/ozon-market-order.svg'
import yandexOrder from '../../images/yandex-market-order.svg'
import './Order.css'

function Order() {
  const { isScreenMy6, isScreenMy7 } = useResize();

  return (
    <section className="order">
      <div className="order__container">
        <h3 className="order__title">ЗАКАЖИ НА МАРКЕТПЛЕЙСЕ</h3>
        <ul className="order__markets-container">
          <li className="order__market-element">
            <a className="order__market-link" href="https://market.yandex.ru/business--amarilis-liuks/900795?utm_source=yandeks_market&utm_campaign=aroma_rascheski">
              <img className="order__icon" src={yandexOrder} alt="Заказать на Яндекс-Маркет"></img>
            </a>
          </li>
          <li className="order__market-element">
            <a className="order__market-link" href="https://www.ozon.ru/seller/ip-vasilechko-i-z-245712/rascheski-i-shchetki-6629/?miniapp=seller_245712">
              <img className="order__icon" src={ozonOrder} alt="Заказать на Озон"></img>
            </a>
          </li>
          <li className="order__market-element">
            <a className="order__market-link" href="https://www.wildberries.ru/seller/370444?sort=popular&page=1&xsubject=500&fbrand=7254&utm_source=vb&utm_medium=posadochnaya_stranitsi&utm_campaign=aroma-rascheski">
              <img className="order__icon" src={wbOrder} alt={'Заказать на Wildberries'}></img>
            </a>
          </li>
          <li className="order__market-element">
            <a className="order__market-link" href="https://sbermegamarket.ru/shop/amarilis?utm_source=sbermegamarket&utm_medium=posadochnaya_stranitsi&utm_campaign=aroma-rascheski">
              <img className="order__icon" src={sbermarketOrder} alt={'Заказать на СберМаркет'}></img>
            </a>
          </li>
        </ul>
        {isScreenMy7 &&
          <div className="order__description-container">
            <h4 className="order__descripton-text">
              ЕСЛИ ТЫ <strong>ОПТОВЫЙ ПОКУПАТЕЛЬ - </strong>ПОЛУЧИ ДОСТУП К ПРАЙСУ
            </h4>
            <div className="order__button">
              <a href="https://amarylis.ru/?partn_reg_open=y&utm_source=kupit__optom&utm_medium=posadochnaya_stranitsi&utm_campaign=aroma-rascheski" className="order__button-link">КУПИТЬ ОПТОМ</a>
            </div>
          </div>}
        {isScreenMy6 &&
          <div className="order__description-container">
            <span className="order__descripton-text">ЕСЛИ ТЫ</span>
            <h4 className="order__descripton-text"><strong>ОПТОВЫЙ ПОКУПАТЕЛЬ - </strong></h4>
            <p className="order__descripton-text order__descripton-text_th">ПОЛУЧИ ДОСТУП К ПРАЙСУ</p>
            <div className="order__button">
              <a href="https://amarylis.ru/?partn_reg_open=y&utm_source=kupit__optom&utm_medium=posadochnaya_stranitsi&utm_campaign=aroma-rascheski" className="order__button-link">КУПИТЬ ОПТОМ</a>
            </div>
          </div>}
      </div>
    </section>
  )
}

export default Order
