import React from 'react';
import './Buy.css'
import { useResize } from '../use-resize';
import auchan from '../../images/auchan-mag.svg';
import yandexm from '../../images/yandexm-mag.svg';
import samokat from '../../images/samokat-mag.svg';
import sberm from '../../images/sberm-mag.svg';
import ozon from '../../images/ozon-mag.svg';
import letu from '../../images/letu-mag.svg';
import goldenapple from '../../images/goldenapple-mag.svg';
import wb from '../../images/wb-mag.svg';

import elize from '../../images/elize-mag.svg'
import rivgosh from '../../images/rivgosh-mag.svg'
import av from '../../images/av-mag.svg'
import neofarm from '../../images/neofarm-mag.svg'
import erka from '../../images/erka-mag.svg'
import ave from '../../images/ave-mag.svg'
import rada from '../../images/raduga-mag.svg'
import ave2 from '../../images/newlogo.svg';

import CarouselMarkets from '../CarouselMarkets/CarouselMarkets'

function Buy() {

  const { width, isScreenMy12, isScreenMy13 } = useResize();
  return (
    <section className="buy" >
      {isScreenMy12 &&

        <div className="buy__container">width={width}
          <h4 className="buy__title">ГДЕ КУПИТЬ</h4>
          <ul className="buy__markets-container">
            <li className="buy__markets-element"><img className="buy__markets-element-img" src={auchan} alt="АШАН"></img></li>
            <li className="buy__markets-element"><img className="buy__markets-element-img" src={yandexm} alt="Яндекс-Маркет"></img></li>
            <li className="buy__markets-element"><img className="buy__markets-element-img" src={samokat}></img></li>
            <li className="buy__markets-element"><img className="buy__markets-element-img" src={sberm}></img></li>
            <li className="buy__markets-element"><img className="buy__markets-element-img" src={wb}></img></li>
            <li className="buy__markets-element"><img className="buy__markets-element-img" src={letu}></img></li>
            <li className="buy__markets-element"><img className="buy__markets-element-img" src={ozon}></img></li>
            <li className="buy__markets-element"><img className="buy__markets-element-img" src={goldenapple}></img></li>
          </ul>
          <ul className="buy__markets-container-second">
            <li className="buy__markets-element"><img className="buy__markets-element-img" src={elize}></img></li>
            <li className="buy__markets-element"><img className="buy__markets-element-img" src={rivgosh}></img></li>
            <li className="buy__markets-element"><img className="buy__markets-element-img" src={av}></img></li>
            <li className="buy__markets-element"><img className="buy__markets-element-img" src={erka}></img></li>
            <li className="buy__markets-element"><img className="buy__markets-element-img" src={neofarm}></img></li>
            <li className="buy__markets-element"><img className="buy__markets-element-img" src={ave}></img></li>
            <li className="buy__markets-element"><img className="buy__markets-element-img" src={rada}></img></li>
          </ul>
        </div>}

      {isScreenMy13 &&
        <div className="buy__container">
          <h4 className="buy__title">ГДЕ КУПИТЬ</h4>
          <div className="buy__carousel">
            <CarouselMarkets>
              <ul className="buy__markets-container">
                <li className="buy__markets-element"><img className="buy__markets-element-img" src={auchan} alt="АШАН"></img></li>
                <li className="buy__markets-element"><img className="buy__markets-element-img" src={yandexm} alt="Яндекс-Маркет"></img></li>
                <li className="buy__markets-element"><img className="buy__markets-element-img" src={samokat}></img></li>
                <li className="buy__markets-element"><img className="buy__markets-element-img" src={sberm}></img></li>
              </ul>
              <ul className="buy__markets-container buy__markets-container_carousel">
                <li className="buy__markets-element"><img className="buy__markets-element-img" src={wb}></img></li>
                <li className="buy__markets-element"><img className="buy__markets-element-img" src={letu}></img></li>
                <li className="buy__markets-element"><img className="buy__markets-element-img" src={goldenapple}></img></li>
                <li className="buy__markets-element"><img className="buy__markets-element-img" src={ozon}></img></li>
              </ul>
            </CarouselMarkets>
            <CarouselMarkets>
              <ul className="buy__markets-container buy__markets-container_three">
                <li className="buy__markets-element"><img className="buy__markets-element-img" src={neofarm}></img></li>
                <li className="buy__markets-element"><img className="buy__markets-element-img" src={ave}></img></li>
                <li className="buy__markets-element"><img className="buy__markets-element-img" src={rada}></img></li>
              </ul>
              <ul className="buy__markets-container buy__markets-container_carousel">
                <li className="buy__markets-element"><img className="buy__markets-element-img" src={elize}></img></li>
                <li className="buy__markets-element"><img className="buy__markets-element-img" src={rivgosh}></img></li>
                <li className="buy__markets-element"><img className="buy__markets-element-img" src={av}></img></li>
                <li className="buy__markets-element"><img className="buy__markets-element-img" src={erka}></img></li>
              </ul>

            </CarouselMarkets>
          </div>
        </div>}
    </section>
  )
}

export default Buy


//{isScreenMy13 &&
 // <div className="buy__container">
  //  <h4 className="buy__title">ГДЕ КУПИТЬ</h4>
  //  <div className="buy__carousel">
  //    <CarouselMarkets>
   //     <ul className="buy__markets-container">
    //      <li className="buy__markets-element"><img className="buy__markets-element-img" src={auchan} alt="АШАН"></img></li>
     //     <li className="buy__markets-element"><img className="buy__markets-element-img" src={yandexm} alt="Яндекс-Маркет"></img></li>
      //    <li className="buy__markets-element"><img className="buy__markets-element-img" src={samokat}></img></li>
     //     <li className="buy__markets-element"><img className="buy__markets-element-img" src={sberm}></img></li>
       // </ul>

       // <ul className="buy__markets-container buy__markets-container_carousel">
        //  <li className="buy__markets-element"><img className="buy__markets-element-img" src={wb}></img></li>
       //   <li className="buy__markets-element"><img className="buy__markets-element-img" src={letu}></img></li>
        //  <li className="buy__markets-element"><img className="buy__markets-element-img" src={goldenapple}></img></li>
         // <li className="buy__markets-element"><img className="buy__markets-element-img" src={ozon}></img></li>
     //   </ul>

     //</CarouselMarkets>
     //</div> <CarouselMarkets>
    //  //  <ul className="buy__markets-container">
       //   <li className="buy__markets-element"><img className="buy__markets-element-img" src={neofarm}></img></li>
      //    <li className="buy__markets-element"><img className="buy__markets-element-img" src={ave}></img></li>
        //  <li className="buy__markets-element"><img className="buy__markets-element-img" src={rada}></img></li>

//
       // </ul>

      //  <ul className="buy__markets-container buy__markets-container_carousel">
       //   <li className="buy__markets-element"><img className="buy__markets-element-img" src={elize}></img></li>
      //    <li className="buy__markets-element"><img className="buy__markets-element-img" src={rivgosh}></img></li>
      //    <li className="buy__markets-element"><img className="buy__markets-element-img" src={av}></img></li>
      //    <li className="buy__markets-element"><img className="buy__markets-element-img" src={erka}></img></li>
        //</ul>

     // </CarouselMarkets>
    //</div>
