import React from 'react';
import { useResize } from '../use-resize';
import CarouselMarkets from '../CarouselMarkets/CarouselMarkets';
import auchan from '../../images/auchan-mag.svg';
import yandexm from '../../images/yandexm-mag.svg';
import samokat from '../../images/samokat-mag.svg';
import sberm from '../../images/sberm-mag.svg';
import ozon from '../../images/ozon-mag.svg';
import letu from '../../images/letu-mag.svg';
import goldenapple from '../../images/goldenapple-mag.svg';
import wb from '../../images/wb-mag.svg';
import elize from '../../images/elize-mag.svg';
import rivgosh from '../../images/rivgosh-mag.svg';
import av from '../../images/av-mag.svg';
import neofarm from '../../images/neofarm-mag.svg'
import erka from '../../images/erka-mag.svg';
import ave from '../../images/ave-mag.svg';
import rada from '../../images/raduga-mag.svg';
import './Buy.css';

function Buy() {
  const { width, isScreenMy12, isScreenMy13 } = useResize();

  return (
    <section className="buy" >
      {isScreenMy12 &&
        <div className="buy__container">width={width}
          <h4 className="buy__title">ГДЕ КУПИТЬ</h4>
          <ul className="buy__markets-container">
            <li className="buy__markets-element"><img className="buy__markets-element-img" src={auchan} alt='АШАН'></img></li>
            <li className="buy__markets-element"><img className="buy__markets-element-img" src={yandexm} alt='Яндекс-Маркет'></img></li>
            <li className="buy__markets-element"><img className="buy__markets-element-img" src={samokat} alt='Самокат'></img></li>
            <li className="buy__markets-element"><img className="buy__markets-element-img" src={sberm} alt='СберМегамаркет'></img></li>
            <li className="buy__markets-element"><img className="buy__markets-element-img" src={wb} alt='Wildberries'></img></li>
            <li className="buy__markets-element"><img className="buy__markets-element-img" src={letu} alt='Летуаль'></img></li>
            <li className="buy__markets-element"><img className="buy__markets-element-img" src={ozon} alt='Озон'></img></li>
            <li className="buy__markets-element"><img className="buy__markets-element-img" src={goldenapple} alt='Золотое Яблоко'></img></li>
          </ul>
          <ul className="buy__markets-container-second">
            <li className="buy__markets-element"><img className="buy__markets-element-img" src={elize} alt='Элизе'></img></li>
            <li className="buy__markets-element"><img className="buy__markets-element-img" src={rivgosh} alt='РИВ ГОШ'></img></li>
            <li className="buy__markets-element"><img className="buy__markets-element-img" src={av} alt='Азбука Вкуса'></img></li>
            <li className="buy__markets-element"><img className="buy__markets-element-img" src={erka} alt='ЭРКАФАРМ'></img></li>
            <li className="buy__markets-element"><img className="buy__markets-element-img" src={neofarm} alt='Неофарм'></img></li>
            <li className="buy__markets-element"><img className="buy__markets-element-img" src={ave} alt='A.v.e Аптека-Luxury'></img></li>
            <li className="buy__markets-element"><img className="buy__markets-element-img" src={rada} alt='Рада. Парфюмерия и косметика'></img></li>
          </ul>
        </div>}
      {isScreenMy13 &&
        <div className="buy__container">
          <h4 className="buy__title">ГДЕ КУПИТЬ</h4>
          <div className="buy__carousel">
            <CarouselMarkets>
              <ul className="buy__markets-container">
                <li className="buy__markets-element"><img className="buy__markets-element-img" src={auchan} alt='АШАН'></img></li>
                <li className="buy__markets-element"><img className="buy__markets-element-img" src={yandexm} alt='Яндекс-Маркет'></img></li>
                <li className="buy__markets-element"><img className="buy__markets-element-img" src={samokat} alt='Самокат'></img></li>
                <li className="buy__markets-element"><img className="buy__markets-element-img" src={sberm} alt='СберМегамаркет'></img></li>
              </ul>
              <ul className="buy__markets-container buy__markets-container_carousel">
                <li className="buy__markets-element"><img className="buy__markets-element-img" src={wb} alt='Wildberries'></img></li>
                <li className="buy__markets-element"><img className="buy__markets-element-img" src={letu} alt='Летуаль'></img></li>
                <li className="buy__markets-element"><img className="buy__markets-element-img" src={ozon} alt='Озон'></img></li>
                <li className="buy__markets-element"><img className="buy__markets-element-img" src={goldenapple} alt='Золотое Яблоко'></img></li>
              </ul>
            </CarouselMarkets>
            <CarouselMarkets>
              <ul className="buy__markets-container buy__markets-container_three">
                <li className="buy__markets-element"><img className="buy__markets-element-img" src={neofarm} alt='Неофарм'></img></li>
                <li className="buy__markets-element"><img className="buy__markets-element-img" src={ave} alt='A.v.e Аптека-Luxury'></img></li>
                <li className="buy__markets-element"><img className="buy__markets-element-img" src={rada} alt='Рада. Парфюмерия и косметика'></img></li>
              </ul>
              <ul className="buy__markets-container buy__markets-container_carousel">
                <li className="buy__markets-element"><img className="buy__markets-element-img" src={elize} alt='Элизе'></img></li>
                <li className="buy__markets-element"><img className="buy__markets-element-img" src={rivgosh} alt='РИВ ГОШ'></img></li>
                <li className="buy__markets-element"><img className="buy__markets-element-img" src={av} alt='Азбука Вкуса'></img></li>
                <li className="buy__markets-element"><img className="buy__markets-element-img" src={erka} alt='ЭРКАФАРМ'></img></li>
              </ul>
            </CarouselMarkets>
          </div>
        </div>}
    </section>
  )
}

export default Buy
