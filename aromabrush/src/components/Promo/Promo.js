import React from 'react';
import './Promo.css'
import black from '../../images/black-ras.svg';
import icon3 from '../../images/ras3.svg';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__con">
      <h3 className="promo__title">ВЫБЕРИ СВОЙ АРОМАТ</h3>
        <div className="promo__container">
          <div className="promo__text">
            <div className="promo__figure promo__figure_in">
              <p className="promo__figure-text">ПРИЯТНЫЙ АРОМАТ</p>
            </div>
            <div className="promo__figure promo__figure_two">
              <p className="promo__figure-text">ДЛЯ СУХИХ И ВЛАЖНЫХ ВОЛОС</p>
            </div>
            <div className="promo__figure promo__figure_in">
              <p className="promo__figure-text">ЕСТЬ ТРЕВЕЛ-ФОРМАТ</p>
            </div>
          </div>

          <img className="promo__brush" src={black}></img>

          <div className="promo__text">
            <div className="promo__figure promo__figure promo__figure_three">
              <p className="promo__figure-text">МАССАЖНОЕ ВОЗДЕЙСТВИЕ</p>
            </div>
            <div className="promo__figure promo__figure_two">
              <p className="promo__figure-text">ЛЁГКАЯ И ПРОЧНАЯ</p>
            </div>
            <div className="promo__figure promo__figure promo__figure_three">
              <p className="promo__figure-text">ЦЕЛЬНЫЙ КОРПУС ЛЕГКО МЫТЬ</p>
            </div>
          </div>



        </div>
        <div className="promo__taste">

        </div>
      </div>





    </section>
  )
}

export default Promo
