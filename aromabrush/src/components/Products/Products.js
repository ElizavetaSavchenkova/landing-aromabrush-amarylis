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

import photo from '../../images/1.svg'
import photo2 from '../../images/2.svg'
import photo3 from '../../images/3.svg'
import photo4 from '../../images/4s.svg'
import photo5 from '../../images/5.svg'
import photo6 from '../../images/6.svg'




function Products() {
  return (
    <section className="products">
      <div className="products__container">

        <h2 className="products__title">ВЫБЕРИ СВОЙ АРОМАТ</h2>

        <div className="products__tagline-container">

          <div className="products__tagline-desc">
            <div className="products__figure products__figure_right">
              <img className="products__figure-text" src={photo}></img>

            </div>
            <div className="products__figure products__figure_center">
              <img className="products__figure-text" src={photo2}></img>
            </div>
            <div className="products__figure products__figure_right">
              <img className="products__figure-text" src={photo3}></img>
            </div>
          </div>
          <img className="products__brush-image" src={black} alt="Арома-расчёска Solomeya со вкусом винограда"></img>
          <div className="products__tagline-desc">
            <div className="products__figure products__figure_left">
              <img className="products__figure-text" src={photo4}></img>
            </div>
            <div className="products__figure products__figure_center">
              <img className="products__figure-text" src={photo5}></img>
            </div>
            <div className="products__figure products__figure_left">
              <img className="products__figure-text" src={photo6}></img>            </div>
          </div>
        </div>
        <ul className="products__tastes-list">
          <li className="products__taste-el">
            <img className="products__taste-img products__taste-img_strawberry" src={strawberry} alt="Запах - клубника"></img>
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

// <span className="products__figure-text">ПРИЯТНЫЙ АРОМАТ</span>
