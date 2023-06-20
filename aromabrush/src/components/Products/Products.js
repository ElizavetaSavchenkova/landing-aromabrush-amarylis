import React from 'react';
import { useResize } from '../use-resize';
import Carousel from '../Carousel/Carousel';
import captionFragrance from '../../images/figure-caption-fragrance-products.svg';
import captionWetAndDry from '../../images/figure-caption-wetanddry-products.svg';
import captionFrame from '../../images/figure-caption-frame-products.svg';
import captionLightAndDurable from '../../images/figure-caption-lightanddurable-products.svg';
import captionMassage from '../../images/figure-caption-massage-products.svg';
import captionTravelFormat from '../../images/figure-caption-travelformat-products.svg';
import strawberry from '../../images/strawberry-icon-products.svg';
import mango from '../../images/mango-icon-products.svg';
import lemon from '../../images/lemon-icon-products.svg';
import jasmine from '../../images/jasmine-icon-products.svg';
import lavender from '../../images/lavender-icon-products.svg';
import grape from '../../images/grape-icon-products.svg';
import brushGrape from '../../images/brush-slider-grape.png';
import brushStrawberry from '../../images/brush-slider-strawberry.png';
import brushGrapeOval from '../../images/brush-slider-grape-long.png';
import brushMango from '../../images/brush-slider-mango.png';
import brushLavender from '../../images/brush-slider-lavender.png';
import brushStrawberryOval from '../../images/brush-slider-strawberry-long.png';
import brushJasmine from '../../images/brush-slider-jasmine.png';
import minibrushGrape from '../../images/minibrush-slider-grape.png';
import minibrushStrawberry from '../../images/minibrush-slider-strawberry.png';
import minibrushLemon from '../../images/minibrush-slider-lemon.png';
import minibrushJasmine from '../../images/minibrush-slider-jasmine.png';
import './Products.css';

function Products() {
  const { isScreenMy5, isScreenMy17, isScreenMy15, isScreenMy16 } = useResize();

  return (
    <section className="products">
      {isScreenMy5 &&
        <div className="products__container">
          <h2 className="products__title">ВЫБЕРИ СВОЙ АРОМАТ</h2>
          <div className="products__tagline-container">
            <div className="products__tagline-desc products__tagline-desc_left">
              <div className="products__figure products__figure_right">
                <img className="products__figure-text" src={captionFragrance} alt='Приятный аромат'></img>
              </div>
              <div className="products__figure products__figure_center">
                <img className="products__figure-text" src={captionWetAndDry} alt='Для сухих и влажных волос'></img>
              </div>
              <div className="products__figure products__figure_right">
                <img className="products__figure-text" src={captionFrame} alt='Цельный корпус легко мыть'></img>
              </div>
            </div>
            <Carousel>
              <img className="products__brush-image" src={brushGrape} alt='Арома-расчёска с ароматом винограда'></img>
              <img className="products__brush-image" src={brushStrawberry} alt='Арома-расчёска с ароматом клубники'></img>
              <img className="products__brush-image" src={brushGrapeOval} alt='Арома-расчёска с ароматом винограда. Овальная форма'></img>
              <img className="products__brush-image" src={brushMango} alt='Арома-расчёска с ароматом манго'></img>
              <img className="products__brush-image" src={brushLavender} alt='Арома-расчёска с ароматом лаванды'></img>
              <img className="products__brush-image" src={brushStrawberryOval} alt='Арома-расчёска с ароматом клубники. Овальная форма'></img>
              <img className="products__brush-image" src={brushJasmine} alt='Арома-расчёска с ароматом жасмина'></img>
              <img className="products__brush-image" src={minibrushGrape} alt='Мини арома-расчёска с ароматом винограда'></img>
              <img className="products__brush-image" src={minibrushStrawberry} alt='Мини арома-расчёска с ароматом клубники'></img>
              <img className="products__brush-image" src={minibrushLemon} alt='Мини арома-расчёска с ароматом лимона'></img>
              <img className="products__brush-image" src={minibrushJasmine} alt='Мини арома-расчёска с ароматом жасмина'></img>
            </Carousel>
            <div className="products__tagline-desc">
              <div className="products__figure products__figure_left">
                <img className="products__figure-text" src={captionLightAndDurable} alt='Лёгкая и прочная'></img>
              </div>
              <div className="products__figure products__figure_center">
                <img className="products__figure-text" src={captionMassage} alt='Оказывает массажное воздействие'></img>
              </div>
              <div className="products__figure products__figure_left">
                <img className="products__figure-text" src={captionTravelFormat} alt='Есть тревел-формат'></img>
              </div>
            </div>
          </div>
          <ul className="products__tastes-list">
            <li className="products__taste-el">
              <img className="products__taste-img products__taste-img_strawberry" src={strawberry} alt="Аромат - клубника"></img>
              <span className="products__taste-caption">клубника</span>
            </li>
            <li className="products__taste-el">
              <img className="products__taste-img" src={mango} alt="Аромат - манго"></img>
              <span className="products__taste-caption">манго</span>
            </li>
            <li className="products__taste-el">
              <img className="products__taste-img" src={lemon} alt="Аромат - лимон"></img>
              <span className="products__taste-caption">лимон</span>
            </li>
            <li className="products__taste-el">
              <img className="products__taste-img" src={jasmine} alt="Аромат - жасмин"></img>
              <span className="products__taste-caption">жасмин</span>
            </li>
            <li className="products__taste-el">
              <img className="products__taste-img" src={lavender} alt="Аромат - лаванда"></img>
              <span className="products__taste-caption">лаванда</span>
            </li>
            <li className="products__taste-el">
              <img className="products__taste-img" src={grape} alt="Аромат - виноград"></img>
              <span className="products__taste-caption">виноград</span>
            </li>
          </ul>
        </div>}
      {isScreenMy17 &&
        <div className="products__container">
          <h2 className="products__title">ВЫБЕРИ СВОЙ АРОМАТ</h2>
          <div className="products__tagline-container">
            <Carousel>
              <img className="products__brush-image" src={brushGrape} alt='Арома-расчёска с ароматом винограда'></img>
              <img className="products__brush-image" src={brushStrawberry} alt='Арома-расчёска с ароматом клубники'></img>
              <img className="products__brush-image" src={brushGrapeOval} alt='Арома-расчёска с ароматом винограда. Овальная форма'></img>
              <img className="products__brush-image" src={brushMango} alt='Арома-расчёска с ароматом манго'></img>
              <img className="products__brush-image" src={brushLavender} alt='Арома-расчёска с ароматом лаванды'></img>
              <img className="products__brush-image" src={brushStrawberryOval} alt='Арома-расчёска с ароматом клубники. Овальная форма'></img>
              <img className="products__brush-image" src={brushJasmine} alt='Арома-расчёска с ароматом жасмина'></img>
              <img className="products__brush-image" src={minibrushGrape} alt='Мини арома-расчёска с ароматом винограда'></img>
              <img className="products__brush-image" src={minibrushStrawberry} alt='Мини арома-расчёска с ароматом клубники'></img>
              <img className="products__brush-image" src={minibrushLemon} alt='Мини арома-расчёска с ароматом лимона'></img>
              <img className="products__brush-image" src={minibrushJasmine} alt='Мини арома-расчёска с ароматом жасмина'></img>
            </Carousel>
            <div className="products__tagline-desc">
              <div className="products__figure products__figure_right">
                <img className="products__figure-text" src={captionFragrance} alt='Приятный аромат'></img>
              </div>
              <div className="products__figure products__figure_center">
                <img className="products__figure-text" src={captionWetAndDry} alt='Для сухих и влажных волос'></img>
              </div>
              <div className="products__figure products__figure_right">
                <img className="products__figure-text" src={captionMassage} alt='Оказывает массажное воздействие'></img>
              </div>
            </div>
            <ul className="products__tastes-list">
              <li className="products__taste-el">
                <img className="products__taste-img products__taste-img_strawberry" src={strawberry} alt="Аромат - клубника"></img>
                <span className="products__taste-caption">клубника</span>
              </li>
              <li className="products__taste-el">
                <img className="products__taste-img" src={mango} alt="Аромат - манго"></img>
                <span className="products__taste-caption">манго</span>
              </li>
              <li className="products__taste-el">
                <img className="products__taste-img" src={lemon} alt="Аромат - лимон"></img>
                <span className="products__taste-caption">лимон</span>
              </li>
              <li className="products__taste-el">
                <img className="products__taste-img" src={jasmine} alt="Аромат - жасмин"></img>
                <span className="products__taste-caption">жасмин</span>
              </li>
            </ul>
            <ul className="products__tastes-list products__tastes-list_second">
              <li className="products__taste-el">
              </li>
              <li className="products__taste-el">
                <img className="products__taste-img" src={lavender} alt="Аромат - лаванда"></img>
                <span className="products__taste-caption">лаванда</span>
              </li>
              <li className="products__taste-el">
                <img className="products__taste-img" src={grape} alt="Аромат - виноград"></img>
                <span className="products__taste-caption">виноград</span>
              </li>
              <li className="products__taste-el">
              </li>
            </ul>
          </div>
        </div>}
      {isScreenMy15 &&
        <div className="products__container">
          <h2 className="products__title">ВЫБЕРИ СВОЙ АРОМАТ</h2>
          <div className="products__tagline-container">
            <Carousel>
              <img className="products__brush-image" src={brushGrape} alt='Арома-расчёска с ароматом винограда'></img>
              <img className="products__brush-image" src={brushStrawberry} alt='Арома-расчёска с ароматом клубники'></img>
              <img className="products__brush-image" src={brushGrapeOval} alt='Арома-расчёска с ароматом винограда. Овальная форма'></img>
              <img className="products__brush-image" src={brushMango} alt='Арома-расчёска с ароматом манго'></img>
              <img className="products__brush-image" src={brushLavender} alt='Арома-расчёска с ароматом лаванды'></img>
              <img className="products__brush-image" src={brushStrawberryOval} alt='Арома-расчёска с ароматом клубники. Овальная форма'></img>
              <img className="products__brush-image" src={brushJasmine} alt='Арома-расчёска с ароматом жасмина'></img>
              <img className="products__brush-image" src={minibrushGrape} alt='Мини арома-расчёска с ароматом винограда'></img>
              <img className="products__brush-image" src={minibrushStrawberry} alt='Мини арома-расчёска с ароматом клубники'></img>
              <img className="products__brush-image" src={minibrushLemon} alt='Мини арома-расчёска с ароматом лимона'></img>
              <img className="products__brush-image" src={minibrushJasmine} alt='Мини арома-расчёска с ароматом жасмина'></img>
            </Carousel>
            <div className="products__tagline-desc">
              <div className="products__figure products__figure_right">
                <img className="products__figure-text" src={captionFragrance} alt='Приятный аромат'></img>
              </div>
              <div className="products__figure products__figure_center">
                <img className="products__figure-text" src={captionWetAndDry} alt='Для сухих и влажных волос'></img>
              </div>
              <div className="products__figure products__figure_right">
                <img className="products__figure-text" src={captionMassage} alt='Оказывает массажное воздействие'></img>
              </div>
            </div>
            <ul className="products__tastes-list">
              <li className="products__taste-el">
                <img className="products__taste-img products__taste-img_strawberry" src={strawberry} alt="Аромат - клубника"></img>
                <span className="products__taste-caption">клубника</span>
              </li>
              <li className="products__taste-el">
                <img className="products__taste-img" src={mango} alt="Аромат - манго"></img>
                <span className="products__taste-caption">манго</span>
              </li>
              <li className="products__taste-el">
                <img className="products__taste-img" src={lemon} alt="Аромат - лимон"></img>
                <span className="products__taste-caption">лимон</span>
              </li>
              <li className="products__taste-el">
                <img className="products__taste-img" src={jasmine} alt="Аромат - жасмин"></img>
                <span className="products__taste-caption">жасмин</span>
              </li>
            </ul>
            <ul className="products__tastes-list products__tastes-list_second">
              <li className="products__taste-el">
              </li>
              <li className="products__taste-el">
                <img className="products__taste-img" src={lavender} alt="Аромат - лаванда"></img>
                <span className="products__taste-caption">лаванда</span>
              </li>
              <li className="products__taste-el">
                <img className="products__taste-img" src={grape} alt="Аромат - виноград"></img>
                <span className="products__taste-caption">виноград</span>
              </li>
              <li className="products__taste-el">
              </li>
            </ul>
          </div>
        </div>}
      {isScreenMy16 &&
        <div className="products__container">
          <h2 className="products__title">ВЫБЕРИ СВОЙ АРОМАТ</h2>
          <div className="products__tagline-container">
            <Carousel>
              <img className="products__brush-image" src={brushGrape} alt='Арома-расчёска с ароматом винограда'></img>
              <img className="products__brush-image" src={brushStrawberry} alt='Арома-расчёска с ароматом клубники'></img>
              <img className="products__brush-image" src={brushGrapeOval} alt='Арома-расчёска с ароматом винограда. Овальная форма'></img>
              <img className="products__brush-image" src={brushMango} alt='Арома-расчёска с ароматом манго'></img>
              <img className="products__brush-image" src={brushLavender} alt='Арома-расчёска с ароматом лаванды'></img>
              <img className="products__brush-image" src={brushStrawberryOval} alt='Арома-расчёска с ароматом клубники. Овальная форма'></img>
              <img className="products__brush-image" src={brushJasmine} alt='Арома-расчёска с ароматом жасмина'></img>
              <img className="products__brush-image" src={minibrushGrape} alt='Мини арома-расчёска с ароматом винограда'></img>
              <img className="products__brush-image" src={minibrushStrawberry} alt='Мини арома-расчёска с ароматом клубники'></img>
              <img className="products__brush-image" src={minibrushLemon} alt='Мини арома-расчёска с ароматом лимона'></img>
              <img className="products__brush-image" src={minibrushJasmine} alt='Мини арома-расчёска с ароматом жасмина'></img>
            </Carousel>
            <div className="products__tagline-desc">
              <div className="products__figure products__figure_right">
                <img className="products__figure-text" src={captionFragrance} alt='Приятный аромат'></img>
              </div>
              <div className="products__figure products__figure_center">
                <img className="products__figure-text" src={captionWetAndDry} alt='Для сухих и влажных волос'></img>
              </div>
              <div className="products__figure products__figure_right">
                <img className="products__figure-text" src={captionMassage} alt='Оказывает массажное воздействие'></img>
              </div>
            </div>
            <ul className="products__tastes-list">
              <li className="products__taste-el">
                <img className="products__taste-img products__taste-img_strawberry" src={strawberry} alt="Аромат - клубника"></img>
                <span className="products__taste-caption">клубника</span>
              </li>
              <li className="products__taste-el">
                <img className="products__taste-img" src={mango} alt="Аромат - манго"></img>
                <span className="products__taste-caption">манго</span>
              </li>
              <li className="products__taste-el">
                <img className="products__taste-img" src={lemon} alt="Аромат - лимон"></img>
                <span className="products__taste-caption">лимон</span>
              </li>
              <li className="products__taste-el">
                <img className="products__taste-img" src={jasmine} alt="Аромат - жасмин"></img>
                <span className="products__taste-caption">жасмин</span>
              </li>
            </ul>
            <ul className="products__tastes-list products__tastes-list_second">
              <li className="products__taste-el">
              </li>
              <li className="products__taste-el">
                <img className="products__taste-img" src={lavender} alt="Аромат - лаванда"></img>
                <span className="products__taste-caption">лаванда</span>
              </li>
              <li className="products__taste-el">
                <img className="products__taste-img" src={grape} alt="Аромат - виноград"></img>
                <span className="products__taste-caption">виноград</span>
              </li>
              <li className="products__taste-el">
              </li>
            </ul>
          </div>
        </div>}
    </section>
  )
}

export default Products
