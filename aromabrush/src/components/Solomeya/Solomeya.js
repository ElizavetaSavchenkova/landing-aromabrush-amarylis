import React from 'react';
import './Solomeya.css'
import icon from '../../images/header-icon-telegram.svg'

function Solomeya() {
  return (
    <section className="solomeya">
      <h1 className="solomeya__title">AROMA WET DETANGLER</h1>
      <h2 className="solomeya__subtitle">АРОМА-РАСЧЁСКИ</h2>
      <div className="solomeya__cont">
        <div className="solomeya__cont-brush">
          <img src={icon}className="solomeya__img_1"></img>
          <img className="solomeya__img"></img>
          <img className="solomeya__img"></img>

        </div>
        <div className="solomeya__cont-buy">
          <p className="solomeya__buy">ХИТ ПРОДАЖ</p>
          <button className="solomeya__button">КУПИТЬ</button>
          <p>Какой-то текст на 2 строки</p>
        </div>


      </div>
    </section>
  )
}

export default Solomeya
