import React from 'react';
import brushpink from '../../images/brushpink-promo-img.svg';
import brushblue from '../../images/brushblue-promo-img.svg';
import brushyellow from '../../images/brushyellow-promo-img.svg';
import './Promo.css'

function Promo() {
  return (
    <section className="promo">
      <p className="promo__title">AROMA WET DETANGLER</p>
      <h1 className="promo__subtitle">АРОМА-РАСЧЁСКИ</h1>
      <div className="promo__promo-container">
        <div className="promo__products">
          <img className="promo__brush-img-pink"
            src={brushpink}
            alt="Расчёска для волос 'Solomeya Wet Detangler Brush'">
          </img>
          <img className="promo__brush-img-blue"
            src={brushblue}
            alt="Расчёска для волос 'Solomeya Wet Detangler Brush'">
          </img>
          <img className="promo__brush-img-yellow"
            src={brushyellow}
            alt="Мини-расчёска для волос 'Solomeya Wet Detangler Brush'">
          </img>
        </div>
        <ul className="promo__bestseller-container">
          <li className="promo__bestseller">ХИТ ПРОДАЖ</li>
          <button className="promo__button" aria-label="Купить хит продаж" type="button" id="bestseller-buy">КУПИТЬ</button>
          <li className="promo__bestseller-desc">У ОФИЦИАЛЬНОГО</li>
          <li className="promo__bestseller-desc promo__bestseller-desc2">ДИСТРИБЬЮТЕРА</li>
        </ul>
      </div>
      <div className="promo__wrapper">
        <div className="promo__element-circle-pink"></div>
        <div className="promo__element-circle-blue"></div>
        <div className="promo__element-circle-yellow"></div>
      </div>
    </section>
  )
}

export default Promo
