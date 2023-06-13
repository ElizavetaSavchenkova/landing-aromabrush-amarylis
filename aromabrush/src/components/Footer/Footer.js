import React from 'react';
import './Footer.css'

import vk from '../../images/vk-footer-icon.svg'
import youtube from '../../images/youtube-footer-icon.svg'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h4 className="footer__title">ПОДПИШИТЕСЬ НА НАС</h4>

        <nav className="footer__info">
          <ul className="footer__info-container">
            <li className="footer__vk">
              <a href="https://vk.com/amarylis_shop?utm_source=vk&utm_medium=posadochnaya_stranitsi&utm_campaign=aroma-rascheski">
                <img className="footer__icon footer__icon_vk" src={vk}></img></a>
              <p className="footer__text-icon">amarylis_shop</p>
            </li>
            <li className="footer__youtube">
              <a href="https://www.youtube.com/@amarylisorg/videos?utm_source=youtube&utm_medium=posadochnaya_stranitsi&utm_campaign=aroma-rascheski"><img className="footer__icon footer__icon_youtube" src={youtube}></img></a>
              <p className="footer__text-icon">YouTube</p>
            </li>
          </ul>
        </nav>
        <p className="footer__note">*Обращаем Ваше внимание на то, что данный интернет-сайт носит исключительно информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями Статьи 437 Гражданского кодекса Российской Федерации.</p>
      </div>
    </footer>
  )
}

export default Footer
