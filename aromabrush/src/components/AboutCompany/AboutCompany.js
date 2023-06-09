import React from 'react';
import './AboutCompany.css'

function AboutCompany() {
  return (
    <section className="aboutcompany" id="aboutcompany">
      <div className="aboutcompany__container">
        <h2 className="aboutcompany__title">О КОМПАНИИ АМАРИЛИС</h2>
        <div className="aboutcompany__desc">
          <p className="aboutcompany__desc-el">"Амарилис" - официальный дистрибьютор английского бренда Solomeya в России. Мы предлагаем высококачественную
            косметику и обладаем более чем 30-летним опытом в сфере
            красоты. Наша компания имеет репутацию надежного партнера
            и широкую партнерскую сеть в России и странах СНГ. </p>
          <p className="aboutcompany__desc-el">Приглашаем вас ознакомиться с нашим портфолио мировых брендов, которые помогут удовлетворить ваши потребности в косметике.</p>
        </div>
      </div>
    </section>
  )
}

export default AboutCompany
