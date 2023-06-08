import React from 'react';
import './Contacts.css'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

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

  return (


    <section className="contacts">
      <div className="contacts__container" id="yandexmap">
        <YMaps>
          <Map defaultState={defaultState}
            width={'100%'}
            height={'500px'}>
            <Placemark geometry={[55.85519539032519, 37.444785813276766]} />
          </Map>
        </YMaps>

        <div className="contacts__info">

          <div className="contacts__map">
            <p className="contacts__map1">Оптовикам</p>
            <p className="contacts__map1">WhatsApp</p>
            <p className="contacts__map1">Интернет-магазин</p>
            <p className="contacts__map1">Санкт-Петербург</p>

            <p className="contacts__map2">+7 (499) 704-55-75</p>
            <p className="contacts__map2">+7 (926) 992-95-88</p>
            <p className="contacts__map2">+7 (800) 511-98-97</p>
            <p className="contacts__map2">+7 (812) 424-18-64</p>
          </div>

          <div className="contacts__maptwo">
          <p className="contacts__map1">Адрес</p>
            <p className="contacts__map1"></p>
            <p className="contacts__map1 contacts__map1_right">Режим работы</p>

            <p className="contacts__map2">г. Москва ул. Фомичевой д.5 корп.2</p>
            <p className="contacts__map2 contacts__map2_center">sales@amarylis.ru</p>
            <p className="contacts__map2 contacts__map2_right">ПН-ПТ - 10:00-19:00</p>

          </div>

        </div>
      </div>




    </section>
  )
}

export default Contacts
