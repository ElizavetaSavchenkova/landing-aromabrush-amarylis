import React from 'react';
import './Promo.css'
import black from '../../images/black-ras.svg';
import icon3 from '../../images/ras3.svg';
import strawberry from '../../images/strawberry.svg'
import mango from '../../images/mango.svg';
import lemon from '../../images/lemon.svg'
import jasmine from '../../images/jasmine.svg'
import lavender from '../../images/lavender.svg'
import grape from '../../images/grape.svg'


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
<div className="promo__element">
  <img className="promo_img" src={strawberry}></img>
  <p className="promo__subt">клубника</p>
</div>
<div className="promo__element">
  <img className="promo_img" src={mango}></img>
  <p className="promo__subt">манго</p>
</div>
<div className="promo__element">
  <img className="promo_img" src={lemon}></img>
  <p className="promo__subt">лимон</p>
</div>
<div className="promo__element">
  <img className="promo_img" src={jasmine}></img>
  <p className="promo__subt">жасмин</p>
</div>
<div className="promo__element">
  <img className="promo_img" src={lavender}></img>
  <p className="promo__subt">лаванда</p>
</div>
<div className="promo__element">
  <img className="promo_img" src={grape}></img>
  <p className="promo__subt">виноград</p>
</div>
        </div>
      </div>





    </section>
  )
}

export default Promo
