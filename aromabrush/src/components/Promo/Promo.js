import React from 'react';
import brushpink from '../../images/aromabrush-pink-promo.png';
import brushblue from '../../images/aromabrush-blue-promo.png';
import brushyellow from '../../images/aromabrush-yellow-promo.png';
import { useResize } from '../use-resize';
import './Promo.css'

function Promo() {
  const { isScreenMy3, isScreenLg, } = useResize();

  return (
    <section className="promo" id="promo">
      {isScreenLg &&
        <>
          <span className="promo__title">AROMA WET DETANGLER</span>
          <h1 className="promo__subtitle">АРОМА-РАСЧЁСКИ</h1>
        </>}
      {isScreenMy3 &&
        <>
          <span className="promo__title">AROMA</span>
          <span className="promo__title">WET DETANGLER</span>
          <h1 className="promo__subtitle">АРОМА-РАСЧЁСКИ</h1>
        </>}
      <div className="promo__promo-container">
        <div className="promo__products">
          <img className="promo__brush-img-pink"
            src={brushpink}
            alt="Арома-расчёска для волос 'Solomeya Wet Detangler Brush'. Цвет: розовый">
          </img>
          <img className="promo__brush-img-blue"
            src={brushblue}
            alt="Арома-расчёска для волос 'Solomeya Wet Detangler Brush'. Цвет: бирюзовый">
          </img>
          <img className="promo__brush-img-yellow"
            src={brushyellow}
            alt="Мини арома-расчёска для волос 'Solomeya Wet Detangler Brush'. Цвет: жёлтый">
          </img>
        </div>
        <ul className="promo__bestseller-container">
          <li className="promo__bestseller"><h2 className="promo__bestseller-title">ХИТ ПРОДАЖ</h2></li>
          <li className="promo__button-buy">
            <a className="promo__button-link-buy" href="https://amarylis.ru/search/?q=%d0%b0%d1%80%d0%be%d0%bc%d0%b0+%d1%80%d0%b0%d1%81%d1%87%d0%b5%d1%81%d0%ba%d0%b8&utm_source=amarylis.ru&utm_medium=posadochnaya_stranitsi&utm_campaign=aroma-rascheski">КУПИТЬ
            </a>
          </li>
          <li className="promo__bestseller-desc">У ОФИЦИАЛЬНОГО</li>
          <li className="promo__bestseller-desc promo__bestseller-desc_newline">ДИСТРИБЬЮТЕРА</li>
        </ul>
      </div>
      <div className="promo__wrapper">
        <div className="promo__element-circle-pink"></div>
        <div className="promo__element-circle-blue"></div>
        <div className="promo__element-circle-violet"></div>
        <div className="promo__element-circle-yellow"></div>
      </div>
    </section>
  )
}

export default Promo
