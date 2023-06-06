import React from 'react';
import './Solomeya.css'
//import icon from '../../images/header-icon-telegram.svg'
import icon from '../../images/ras1.svg';
import icon2 from '../../images/ras2.svg';
import icon3 from '../../images/ras3.svg';


function Solomeya() {
  return (
    <section className="solomeya">
      <h1 className="solomeya__title">AROMA WET DETANGLER</h1>
      <h2 className="solomeya__subtitle">АРОМА-РАСЧЁСКИ</h2>
      <div className="solomeya__cont">
        <div className="solomeya__cont-brush">

          <img className="solomeya__img-1" src={icon}></img>

          <img className="solomeya__img-2" src={icon2}></img>

          <img className="solomeya__img-3" src={icon3}></img>

        </div>
        <div className="solomeya__cont-buy">
          <p className="solomeya__buy">ХИТ ПРОДАЖ</p>
          <button className="solomeya__button">КУПИТЬ</button>
          <p className="solomeya__text">У ОФИЦИАЛЬНОГО</p>
          <p className="solomeya__text solomeya__text_2">ДИСТРИБЬЮТЕРА</p>
        </div>


      </div>
      <div className="sol__test">

      <div className="solomeya__element_1"></div>
      <div className="solomeya__element_2"></div>
      <div className="solomeya__element_3"></div>
      </div>


    </section>
  )
}

export default Solomeya
