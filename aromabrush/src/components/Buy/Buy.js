import React from 'react';
import './Buy.css'
import auchan from '../../images/auchan.svg';
import yandexm from '../../images/yandexm-icon.svg';
import samokat from '../../images/samokat-icon.svg';
import sberm from '../../images/sbermarket-icon.svg';
import ozon from '../../images/ozon-icon.svg';
import letu from '../../images/letu-icon.svg';
import goldenapple from '../../images/golden-apple-icon.svg';
import wb from '../../images/wb-icon.svg';

import elize from '../../images/elize-icon.svg'
import rivgosh from '../../images/riv-gosh-icon.svg'
import av from '../../images/av-icon.svg'
import erka from '../../images/neo-farm-icon.svg'
import neo from '../../images/av-icon.svg'
import ave from '../../images/ave-icon.svg'
import rada from '../../images/rada-icon.svg'

import ave2 from '../../images/newlogo.svg';

function Buy() {
  return (
    <section className="buy">
      <div className="buy__container">
        <h4 className="buy__title">ГДЕ КУПИТЬ</h4>
        <ul className="buy__markets">
          <li className="buy__markets-element"><img className="buy__markets-element-img" src={auchan}></img></li>
          <li className="buy__markets-element"><img className="buy__markets-element-img" src={yandexm}></img></li>
          <li className="buy__markets-element"><img className="buy__markets-element-img" src={samokat}></img></li>
          <li className="buy__markets-element"><img className="buy__markets-element-img" src={sberm}></img></li>
          <li className="buy__markets-element"><img className="buy__markets-element-img" src={wb}></img></li>
          <li className="buy__markets-element"><img className="buy__markets-element-img" src={letu}></img></li>
          <li className="buy__markets-element"><img className="buy__markets-element-img" src={ozon}></img></li>
          <li className="buy__markets-element"><img className="buy__markets-element-img" src={goldenapple}></img></li>

         </ul>
         <ul className="buy__markets_2">
          <li className="buy__markets-element"><img className="buy__markets-element-img" src={elize}></img></li>
          <li className="buy__markets-element"><img className="buy__markets-element-img" src={rivgosh}></img></li>
          <li className="buy__markets-element"><img className="buy__markets-element-img" src={av}></img></li>
          <li className="buy__markets-element"><img className="buy__markets-element-img" src={erka}></img></li>
          <li className="buy__markets-element"><img className="buy__markets-element-img" src={neo}></img></li>
          <li className="buy__markets-element"><img className="buy__markets-element-img" src={ave2}></img></li>
          <li className="buy__markets-element"><img className="buy__markets-element-img" src={rada}></img></li>
        </ul>
      </div>

    </section>
  )
}

export default Buy
