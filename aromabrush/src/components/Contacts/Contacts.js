import React from 'react';
import './Contacts.css'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { useResize } from '../use-resize';
//let map;
//et marker;
//function initMap ()
//{
////map = new ymaps.Map("yandexmap", {
//center: [56.039017, 92.894853],
//zoom: 16
// });
//marker = new ymaps.Placemark([56.039017, 92.894853], {
//hintContent: 'Расположение',
//balloonContent: 'Это наша организация'
//});
//map.geoObjects.add(marker);
//}
//ymaps.ready(initMap);




function Contacts() {

  const defaultState = {
    center: [55.85519539032519, 37.444785813276766],
    zoom: 17,

  };

  const { width, isScreenMy9, isScreenMy10, isScreenMy11 } = useResize();

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

              <li className="contacts__info-desc">+7 (499) 704-55-75</li>
              <li className="contacts__info-desc">+7 (926) 992-95-88</li>
              <li className="contacts__info-desc">+7 (800) 511-98-97</li>
              <li className="contacts__info-desc">+7 (812) 424-18-64</li>
            </ul>

            <ul className="contacts__info-container contacts__info-container_second">
              <li className="contacts__info-title">Адрес</li>
              <li className="contacts__info-title"></li>
              <li className="contacts__info-title contacts__info-title_right">Режим работы</li>

              <li className="contacts__info-desc">г. Москва ул. Фомичевой д.5 корп.2</li>
              <li className="contacts__info-desc contacts__info-desc_center">sales@amarylis.ru</li>
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
              <li className="contacts__info-desc">+7 (499) 704-55-75</li>
              <li className="contacts__info-desc">+7 (800) 511-98-97</li>
              <li className="contacts__info-title">WhatsApp</li>
              <li className="contacts__info-title">Санкт-Петербург</li>
              <li className="contacts__info-desc">+7 (926) 992-95-88</li>
              <li className="contacts__info-desc">+7 (812) 424-18-64</li>
            </ul>
            <ul className="contacts__info-container contacts__info-container_second">
              <li className="contacts__info-title">Адрес</li>
              <li className="contacts__info-desc contacts__info-desc__address">г. Москва ул. Фомичевой д.5 корп.2</li>
              <li className="contacts__info-desc contacts__info-desc_center">sales@amarylis.ru</li>
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
              <li className="contacts__info-desc">+7 (499) 704-55-75</li>
              <li className="contacts__info-title">WhatsApp</li>
              <li className="contacts__info-desc">+7 (926) 992-95-88</li>
              <li className="contacts__info-title">Интернет-магазин</li>
              <li className="contacts__info-desc">+7 (800) 511-98-97</li>
              <li className="contacts__info-title">Санкт-Петербург</li>
              <li className="contacts__info-desc">+7 (812) 424-18-64</li>
              <li className="contacts__info-title">Адрес</li>
              <li className="contacts__info-desc contacts__info-desc__address">г. Москва ул. Фомичевой д.5 корп.2</li>
              <li className="contacts__info-desc contacts__info-desc_center">sales@amarylis.ru</li>
              <li className="contacts__info-title contacts__info-title_right">Режим работы</li>
              <li className="contacts__info-desc contacts__info-desc_right">ПН-ПТ - 10:00-19:00</li>
            </ul>
          </div>
        </div>}
    </section>
  )
}

export default Contacts


//
//<ul className="contacts__info-container contacts__info-container_second">
          // /   <li className="contacts__info-title">Адрес</li>
        //      <li className="contacts__info-title"></li>
            ///  <li className="contacts__info-title contacts__info-title_right">Режим работы</li>
////
            //  <li className="contacts__info-desc">г. Москва ул. Фомичевой д.5 корп.2</li>
           //   <li className="contacts__info-desc contacts__info-desc_center">sales@amarylis.ru</li>
            //  <li className="contacts__info-desc contacts__info-desc_right">ПН-ПТ - 10:00-19:00</li>

         //   </ul>
