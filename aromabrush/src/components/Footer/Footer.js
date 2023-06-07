import React from 'react';
import './Footer.css'

import vk from '../../images/vk-footer-icon.svg'
import youtube from '../../images/youtube-footer-icon.svg'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h4 className="footer__title">ПОДПИШИТЕСЬ НА НАС</h4>
        <div className="footer__info">
          <div className="footer__vk">
            <img className="footer__icon" src={vk}></img>
            <p className="footer__text">amarylis_shop</p>
          </div>
          <div className="footer__youtube">
            <img className="footer__icon2" src={youtube}></img>
            <p className="footer__text">YouTube</p>
          </div>
        </div>
        <p className="footer__sub">*Обращаем Ваше внимание на то, что данный интернет-сайт носит исключительно информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями Статьи 437 Гражданского кодекса Российской Федерации.</p>
      </div>



    </footer>
  )
}

export default Footer
