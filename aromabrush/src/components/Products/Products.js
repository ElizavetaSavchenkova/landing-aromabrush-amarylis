import React from 'react';

import black from '../../images/black-ras.svg';
//import icon3 from '../../images/ras3.svg';
import strawberry from '../../images/strawberry.svg'
import mango from '../../images/mango.svg';
import lemon from '../../images/lemon.svg'
import jasmine from '../../images/jasmine.svg'
import lavender from '../../images/lavender.svg'
import grape from '../../images/grape.svg'
import './Products.css';


function Products() {
  return (
    <section className="products">

      <div className="products__container">

        <h2 className="products__title">ВЫБЕРИ СВОЙ АРОМАТ</h2>

        <div className="products__tagline-container">

          <div className="products__tagline-desc">
            <div className="products__figure products__figure_in">
              <span className="products__figure-text">ПРИЯТНЫЙ АРОМАТ</span>
            </div>

            <div className="products__figure products__figure_two">
              <span className="products__figure-text">ДЛЯ СУХИХ И ВЛАЖНЫХ ВОЛОС</span>
            </div>

            <div className="products__figure products__figure_in">
              <span className="products__figure-text">ЕСТЬ ТРЕВЕЛ-ФОРМАТ</span>
            </div>

          </div>

          <img className="products__brush" src={black} alt="Арома-расчёска Solomeya со вкусом винограда"></img>

          <div className="products__tagline-desc">
            <div className="products__figure products__figure products__figure_three">
              <p className="products__figure-text">МАССАЖНОЕ ВОЗДЕЙСТВИЕ</p>
            </div>
            <div className="products__figure products__figure_two">
              <p className="products__figure-text">ЛЁГКАЯ И ПРОЧНАЯ</p>
            </div>
            <div className="products__figure products__figure products__figure_three">
              <p className="products__figure-text">ЦЕЛЬНЫЙ КОРПУС ЛЕГКО МЫТЬ</p>
            </div>
          </div>



        </div>

        <ul className="products__tastes-list">
          <li className="products__element">
            <img className="products_img" src={strawberry}></img>
            <p className="products__subt">клубника</p>
          </li>
          <li className="products__element">
            <img className="products_img" src={mango}></img>
            <p className="products__subt">манго</p>
          </li>
          <li className="products__element">
            <img className="products_img" src={lemon}></img>
            <p className="products__subt">лимон</p>
          </li>
          <li className="products__element">
            <img className="products_img" src={jasmine}></img>
            <p className="products__subt">жасмин</p>
          </li>
          <li className="products__element">
            <img className="products_img" src={lavender}></img>
            <p className="products__subt">лаванда</p>
          </li>
          <li className="products__element">
            <img className="products_img" src={grape}></img>
            <p className="products__subt">виноград</p>
          </li>
        </ul>
      </div>





    </section>
  )
}

export default Products
