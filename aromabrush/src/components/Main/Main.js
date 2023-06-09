import React from 'react';
import Promo from '../Promo/Promo';
import Products from '../Products/Products';
import Order from '../Order/Order';
import Banner from '../Banner/Banner'
import AboutBrush from '../AboutBrush/AboutBrush';
import Buy from '../Buy/Buy';
import Review from '../Review/Review'
import Contacts from '../Contacts/Contacts';
import AboutCompany from '../AboutCompany/AboutCompany';
import './Main.css'

function Main({ start, width }) {
  return (
    <main className="main" id="main">
      <Promo
        start={start} />
      <Products width={width}/>
      <Order />
      <Banner />
      <AboutBrush />
      <Buy />
      <Review />
      <AboutCompany />
      <Contacts />
    </main>
  )
}

export default Main
