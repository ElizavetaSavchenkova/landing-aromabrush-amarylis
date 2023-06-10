import React from 'react';

import black from '../../images/brush-promo.svg';
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
            <div className="products__figure products__figure_right">
              <span className="products__figure-text">ПРИЯТНЫЙ АРОМАТ</span>
            </div>
            <div className="products__figure products__figure_center">
              <span className="products__figure-text">ДЛЯ СУХИХ И ВЛАЖНЫХ ВОЛОС</span>
            </div>
            <div className="products__figure products__figure_right">
              <span className="products__figure-text">ЕСТЬ ТРЕВЕЛ-ФОРМАТ</span>
            </div>
          </div>
          <img className="products__brush-image" src={black} alt="Арома-расчёска Solomeya со вкусом винограда"></img>
          <div className="products__tagline-desc">
            <div className="products__figure products__figure_left">
              <p className="products__figure-text">МАССАЖНОЕ ВОЗДЕЙСТВИЕ</p>
            </div>
            <div className="products__figure products__figure_center">
              <p className="products__figure-text">ЛЁГКАЯ И ПРОЧНАЯ</p>
            </div>
            <div className="products__figure products__figure_left">
              <p className="products__figure-text">ЦЕЛЬНЫЙ КОРПУС ЛЕГКО МЫТЬ</p>
            </div>
          </div>
        </div>
        <ul className="products__tastes-list">
          <li className="products__taste-el">
            <img className="products__taste-img" src={strawberry} alt="Запах - клубника"></img>
            <span className="products__taste-caption">клубника</span>
          </li>
          <li className="products__taste-el">
            <img className="products__taste-img" src={mango} alt="Запах - манго"></img>
            <span className="products__taste-caption">манго</span>
          </li>
          <li className="products__taste-el">
            <img className="products__taste-img" src={lemon} alt="Запах - лимон"></img>
            <span className="products__taste-caption">лимон</span>
          </li>
          <li className="products__taste-el">
            <img className="products__taste-img" src={jasmine} alt="Запах - жасмин"></img>
            <span className="products__taste-caption">жасмин</span>
          </li>
          <li className="products__taste-el">
            <img className="products__taste-img" src={lavender} alt="Запах - лаванда"></img>
            <span className="products__taste-caption">лаванда</span>
          </li>
          <li className="products__taste-el">
            <img className="products__taste-img" src={grape} alt="Запах - виноград"></img>
            <span className="products__taste-caption">виноград</span>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Products
