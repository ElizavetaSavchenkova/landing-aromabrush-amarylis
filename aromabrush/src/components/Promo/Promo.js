import React, { useCallback } from 'react';
import { useState, useEffect } from 'react';
import brushpink from '../../images/brushpink-promo-img.svg';
import brushblue from '../../images/brushblue-promo-img.svg';
import brushyellow from '../../images/brushyellow-promo-img.svg';
import './Promo.css'
import { useResize } from '../use-resize';



function Promo() {

  //const [start, setStart] = useState(false)

  //window.addEventListener("resize", AutoScale);
  //AutoScale();

  //function AutoScale() {
  // let width = window.screen.width; //Ширина окна
  //Если вы хотите проверять по размеру экрана, то вам нужно свойство window.screen.width

  /// if (width > 1280)
  //  console.log('1380')
  //  setStart(true)

  //}

  //const [start, setStart] = useState(false)
  //const [width, setWidth] = useState(window.innerWidth);
  //const [amount, setAmount] = useState(12);


  //const useResize = () => {
  // const [width, setWidth] = useState(window.innerWidth);

  // useEffect(() => {
  // const handleResize = (event) => {
  //   setWidth(event.target.innerWidth);
  // };
  // /window.addEventListener('resize', handleResize);
  //return () => {
  //  window.removeEventListener('resize', handleResize);
  // };
  //}, []);

  // return {
  //  width,
  //  isScreenSm: width >= 320
  //  isScreenMd: width >= 1000
  //  isScreenLg: width >= 13000
  //};
  // };




  // function throttle(func, timeout) {
  //  let timer = null
  //return function (...args) {
  // if (!timer) {
  //     timer = setTimeout(() => {
  //     func.call(this, ...args)
  //     timer = null
  //   }, timeout)
  //  }
  // }
  // }

  //useEffect(() => {
  //  const updateWidth = throttle(() => {
  //    setWidth(window.innerWidth);
  // }, 500);
  ///  window.addEventListener('resize', updateWidth);
  //  return () => window.removeEventListener('resize', updateWidth);
  // }, []);

  // const big = windowWidth >= 951
  // const min = windowWidth <= 950

  const { width, isScreenMy3, isScreenSm, isScreenMd, isScreenLg, isScreenXl } = useResize();

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
          <li className="promo__bestseller"><h2 className="promo__bestseller-title">ХИТ ПРОДАЖ</h2></li>
          <li className="promo__button-buy"><a className="promo__button-link-buy" href="https://amarylis.ru/search/?q=%d0%b0%d1%80%d0%be%d0%bc%d0%b0+%d1%80%d0%b0%d1%81%d1%87%d0%b5%d1%81%d0%ba%d0%b8&utm_source=amarylis.ru&utm_medium=posadochnaya_stranitsi&utm_campaign=aroma-rascheski">КУПИТЬ</a></li>
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


//{big &&
 // <>
  ///  <span className="promo__title">AROMA WET DETANGLER</span>
 //  <h1 className="promo__subtitle">АРОМА-РАСЧЁСКИ</h1>
 // </>}

//{min &&
 // <>
 //   <span className="promo__title">AROMA</span>
  //  <span className="promo__title">WET DETANGLER</span>
 //  <h1 className="promo__subtitle">АРОМА-РАСЧЁСКИ</h1>
  //</>
//}
