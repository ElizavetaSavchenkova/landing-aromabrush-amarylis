import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { useResize } from '../use-resize';
import './Contacts.css';

function Contacts() {

  const { isScreenMy9, isScreenMy10, isScreenMy11 } = useResize();

  return (
    <section className="contacts" id="contacts">
      <h3 className="contacts__title">КОНТАКТЫ</h3>
      {isScreenMy9 &&
        <div className="contacts__container" id="yandexmap">
          <YMaps>
            <Map
              state={{ center: [55.85519539032519, 37.444785813276766], zoom: 17 }}
              width={'100%'}
              height={'450px'}>
              <Placemark geometry={[55.85519539032519, 37.444785813276766]} />
            </Map>
          </YMaps>
          <div className="contacts__info">
            <ul className="contacts__info-container">
              <li className="contacts__info-title">Оптовикам</li>
              <li className="contacts__info-title">WhatsApp</li>
              <li className="contacts__info-title">Интернет-магазин</li>
              <li className="contacts__info-title">Санкт-Петербург</li>
              <li className="contacts__info-desc"><a className="contacts__info-desc-click-tel" href="tel:+7 (499) 704-55-75">+7 (499) 704-55-75</a></li>
              <li className="contacts__info-desc"><a className="contacts__info-desc-click-tel" href="https://wa.me/79269959588?utm_source=wa&utm_campaign=aroma_rascheski">+7 (926) 992-95-88</a></li>
              <li className="contacts__info-desc"><a className="contacts__info-desc-click-tel" href="tel:+7 (800) 511-98-97">+7 (800) 511-98-97</a></li>
              <li className="contacts__info-desc"><a className="contacts__info-desc-click-tel" href="tel:+7 (812) 424-18-64">+7 (812) 424-18-64</a></li>
            </ul>
            <ul className="contacts__info-container contacts__info-container_second">
              <li className="contacts__info-title">Адрес</li>
              <li className="contacts__info-title"></li>
              <li className="contacts__info-title contacts__info-title_right">Режим работы</li>
              <li className="contacts__info-desc">г. Москва ул. Фомичевой д.5 корп.2</li>
              <li className="contacts__info-desc contacts__info-desc_center contacts__info-desc_email"><a className="contacts__info-desc-click-email" href="mailto:sales@amarylis.ru">sales@amarylis.ru</a></li>
              <li className="contacts__info-desc contacts__info-desc_right">ПН-ПТ - 10:00-19:00</li>
            </ul>
          </div>
        </div>}
      {isScreenMy10 &&
        <div className="contacts__container" id="yandexmap">
          <YMaps>
            <Map
              state={{ center: [55.85409612663442, 37.44562956773195], zoom: 16 }}
              width={'100%'}
              height={'500px'}>
              <Placemark geometry={[55.85519539032519, 37.444785813276766]} />
            </Map>
          </YMaps>
          <div className="contacts__info">
            <ul className="contacts__info-container">
              <li className="contacts__info-title">Оптовикам</li>
              <li className="contacts__info-title">Интернет-магазин</li>
              <li className="contacts__info-desc"><a className="contacts__info-desc-click-tel" href="tel:+7 (499) 704-55-75">+7 (499) 704-55-75</a></li>
              <li className="contacts__info-desc"><a className="contacts__info-desc-click-tel" href="tel:+7 (800) 511-98-97">+7 (800) 511-98-97</a></li>
              <li className="contacts__info-title">WhatsApp</li>
              <li className="contacts__info-title">Санкт-Петербург</li>
              <li className="contacts__info-desc"><a className="contacts__info-desc-click-tel" href="https://wa.me/79269959588?utm_source=wa&utm_campaign=aroma_rascheski">+7 (926) 992-95-88</a></li>
              <li className="contacts__info-desc"><a className="contacts__info-desc-click-tel" href="tel:+7 (812) 424-18-64">+7 (812) 424-18-64</a></li>
            </ul>
            <ul className="contacts__info-container contacts__info-container_second">
              <li className="contacts__info-title">Адрес</li>
              <li className="contacts__info-desc contacts__info-desc__address">г. Москва ул. Фомичевой д.5 корп.2</li>
              <li className="contacts__info-desc contacts__info-desc_center contacts__info-desc_email"><a className="contacts__info-desc-click-email" href="mailto:sales@amarylis.ru">sales@amarylis.ru</a></li>
              <li className="contacts__info-title contacts__info-title_right">Режим работы</li>
              <li className="contacts__info-desc contacts__info-desc_right">ПН-ПТ - 10:00-19:00</li>
            </ul>
          </div>
        </div>}
      {isScreenMy11 &&
        <div className="contacts__container" id="yandexmap">
          <YMaps>
            <Map
              state={{ center: [55.85283649208692, 37.4447839967925], zoom: 16 }}
              width={'100%'}
              height={'550px'}>
              <Placemark geometry={[55.85519539032519, 37.444785813276766]} />
            </Map>
          </YMaps>
          <div className="contacts__info">
            <ul className="contacts__info-container">
              <li className="contacts__info-title">Оптовикам</li>
              <li className="contacts__info-desc"><a className="contacts__info-desc-click-tel" href="tel:+7 (499) 704-55-75">7 (499) 704-55-75</a></li>
              <li className="contacts__info-title">WhatsApp</li>
              <li className="contacts__info-desc"><a className="contacts__info-desc-click-tel" href="https://wa.me/79269959588?utm_source=wa&utm_campaign=aroma_rascheski">+7 (926) 992-95-88</a></li>
              <li className="contacts__info-title">Интернет-магазин</li>
              <li className="contacts__info-desc"><a className="contacts__info-desc-click-tel" href="tel:+7 (800) 511-98-97">+7 (800) 511-98-97</a></li>
              <li className="contacts__info-title">Санкт-Петербург</li>
              <li className="contacts__info-desc"><a className="contacts__info-desc-click-tel" href="tel:+7 (812) 424-18-64">+7 (812) 424-18-64</a></li>
              <li className="contacts__info-title contacts__info-title_address">Адрес</li>
              <li className="contacts__info-desc contacts__info-desc__address">г. Москва ул. Фомичевой д.5 корп.2</li>
              <li className="contacts__info-desc contacts__info-desc_center contacts__info-desc_email"><a className="contacts__info-desc-click-email" href="mailto:sales@amarylis.ru">sales@amarylis.ru</a></li>
              <li className="contacts__info-title contacts__info-title_right">Режим работы</li>
              <li className="contacts__info-desc contacts__info-desc_right">ПН-ПТ - 10:00-19:00</li>
            </ul>
          </div>
        </div>}
    </section>
  )
}

export default Contacts
